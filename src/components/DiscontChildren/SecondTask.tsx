import React, { useState, ChangeEvent } from 'react'
import { Input } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function SecondTask() {
    type StateItemType = {
        percentFirst: null | string,
        percentSecond: null | string,
        years: null | string,
        roubles: null | string,
        capitalization: null | string
    }
    const [state, setState] = useState<StateItemType>({ percentFirst: "", percentSecond: "", years: "", roubles: "", capitalization: "" })

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            percentFirst: position === 1 ? newValue : state.percentFirst,
            percentSecond: position === 5 ? newValue : state.percentSecond,
            years: position === 2 ? newValue : state.years,
            roubles: position === 3 ? newValue : state.roubles,
            capitalization: position === 4 ? newValue : state.capitalization
        })
    }
    let formula1 = Number(state.roubles) * (1 + (Number(state.years)) / 365 * (Number(state.percentFirst) / 100))
    let formula2 = Number(state.roubles) * (1 - (Number(state.capitalization)) / 365 * (Number(state.percentSecond) / 100))
    return (
        <div>
            <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(1, e.target.value) }} addonBefore="Ставка векселя - " addonAfter="%" placeholder="" value={state.percentFirst ? state.percentFirst : ''} />
            <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(5, e.target.value) }} addonBefore="Учётная ставка - " addonAfter="%" placeholder="" value={state.percentSecond ? state.percentSecond : ''} />
            <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(3, e.target.value) }} addonBefore="Сумма векселя - " addonAfter="руб." placeholder="" value={state.roubles ? state.roubles : ''} />
            <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(2, e.target.value) }} addonBefore="Длительность векселя - " addonAfter="дней" placeholder="" value={state.years ? state.years : ''} />
            <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(4, e.target.value) }} addonBefore="Дней до окончания - " addonAfter="дней" placeholder="" value={state.capitalization ? state.capitalization : ''} />
            <div className={style.MathJaxInside}>
                <span>Cумма, которую получит банк:</span>
                <br />
                <MathComponent display={false} tex={String.raw`S = ${state.roubles} × (1 + \frac{${state.years}}{365} × ${Number(state.percentFirst) / 100})`} />
                <span>= {formula1.toFixed(3)}</span>
                <br />
                <span>Cумма, которую получит предъявитель:</span>
                <br />
                <MathComponent display={false} tex={String.raw`P = ${state.roubles} × (1 - \frac{${state.capitalization}}{365} × ${Number(state.percentSecond) / 100})`} />
                <span>= {formula2.toFixed(3)}</span>
                <br />
                <span>Cумма дохода банка:</span>
                <br />
                <MathComponent display={false} tex={String.raw`S = ${formula1.toFixed(3)} - ${formula2.toFixed(3)}`} />
                <span>= {(formula1 - formula2).toFixed(3)}</span>
            </div>
        </div>
    )
}
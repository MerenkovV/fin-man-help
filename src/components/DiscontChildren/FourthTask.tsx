import React, { useState, ChangeEvent } from 'react'
import { Input } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FourthTask() {
    type StateItemType = {
      cost: null | string, 
      duration: null | string, 
      income: null | string, 
      time: null | string
    }
    const [state, setState] = useState<StateItemType>({cost: "", duration: "", income: "", time: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            cost: position === 1 ? newValue : state.cost, 
            duration: position === 2 ? newValue : state.duration, 
            income: position === 3 ? newValue : state.income, 
            time: position === 4 ? newValue : state.time
        })
    }
    let formula1 = ((1-(Number(state.income))/(Number(state.cost))) * 365)/(Number(state.duration) - Number(state.time))
    let formula2 = Number(state.cost)*(1 + formula1 * (Number(state.duration)/365))
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Стоимость векселя - " addonAfter="руб." placeholder="" value={state.cost ? state.cost : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Дней на погашение - " addonAfter="дней" placeholder="" value={state.duration ? state.duration : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(4, e.target.value)}} addonBefore="Время удержания - " addonAfter="дней" placeholder="" value={state.time ? state.time : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Получим рублей - " addonAfter="руб." placeholder="" value={state.income ? state.income : ''} />
        <div className={style.MathJaxInside}>
            <span>Используем формулу:</span><br/>
            <MathComponent display = {false} tex={String.raw`P= S(1 - d\frac{t}{T})`}/><br/>
            <span>Учётная ставка:</span><br/>
            <MathComponent display = {false} tex={String.raw`d= \frac{(-\frac{${state.income}}{${state.cost}} + 1)× 365}{(${state.duration} - ${state.time})}`}/>
            <span>= {formula1.toFixed(3)} = {(formula1 * 100).toFixed(1)}%</span><br/>
            <span>Банк получит:</span><br/>
            <MathComponent display = {false} tex={String.raw`S= \frac{P}{(1 - d\frac{t}{T})}`}/>
            <MathComponent display = {false} tex={String.raw`= ${state.cost}×(1 + ${formula1.toFixed(3)}\frac{${state.duration}}{365}) - ${state.income}`}/>
            <span>= {formula2.toFixed(3)} - {state.income}</span><br/>
            <span>= {(formula2 - Number(state.income)).toFixed(3)}</span><br/>
        </div>
    </div>
  )
}
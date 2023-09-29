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
    let formula = ((1-(Number(state.income))/(Number(state.cost))) * 365)/(Number(state.duration) - Number(state.time))
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Стоимость векселя - " addonAfter="руб." placeholder="" value={state.cost ? state.cost : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Дней на погашение - " addonAfter="дней" placeholder="" value={state.duration ? state.duration : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(4, e.target.value)}} addonBefore="Время удержания - " addonAfter="дней" placeholder="" value={state.time ? state.time : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Получим рублей - " addonAfter="руб." placeholder="" value={state.income ? state.income : ''} />
        <div className={style.MathJaxInside}>
            <span>Используем формулу:</span><br/>
            <MathComponent display = {false} tex={String.raw`P= S(1 - d\frac{t}{T})`}/><br/>
            <MathComponent display = {false} tex={String.raw`d= \frac{(-\frac{${state.income}}{${state.cost}} + 1)× 365}{(${state.duration} - ${state.time})})`}/>
            <span>= {formula.toFixed(3)} = {(formula * 100).toFixed(1)}%</span>
        </div>
    </div>
  )
}
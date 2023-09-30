import React, { useState, ChangeEvent } from 'react'
import { Input } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function ThirdTask() {
    type StateItemType = {
      percent: null | string, 
      duration: null | string,
      time: null | string, 
      profitability: null | string
    }
    const [state, setState] = useState<StateItemType>({percent: "", duration: "", time: "", profitability: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            percent: position === 1 ? newValue : state.percent, 
            duration: position === 2 ? newValue : state.duration, 
            time: position === 3 ? newValue : state.time,
            profitability: position === 4 ? newValue : state.profitability
        })
    }
    let formula1 = ((Number(state.profitability) - Number(state.percent))/Number(state.percent))*(365/Number(state.duration))*100
    let formula2 = ((100 - Number(state.profitability))/Number(state.profitability))*(365/(Number(state.time) - Number(state.duration)))*100
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Куплено за - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Продано через - " addonAfter="дней" placeholder="" value={state.duration ? state.duration : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Срок облигации - " addonAfter="дней" placeholder="" value={state.time ? state.time : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(4, e.target.value)}} addonBefore="Продано за - " addonAfter="%" placeholder="" value={state.profitability ? state.profitability : ''} />

        <div className={style.MathJaxInside}><br/>
        <span>Доходность первого человека:</span><br/>
          <MathComponent display = {false} tex={String.raw`r=\frac{${state.profitability} - ${state.percent}}{${state.percent}}×\frac{365}{${state.duration}}×100%`}/>
          <span>= {formula1.toFixed(2)}%</span><br/>
          <span>Доходность второго человека:</span><br/>
          <MathComponent display = {false} tex={String.raw`r=\frac{100 - ${state.profitability}}{${state.profitability}}×\frac{365}{${state.time}-${state.duration}}×100%`}/>
          <span>= {formula2.toFixed(2)}%</span>
        </div>
    </div>
  )
}
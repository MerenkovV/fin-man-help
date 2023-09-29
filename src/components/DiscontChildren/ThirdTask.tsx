import React, { useState, ChangeEvent } from 'react'
import { Input } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function ThirdTask() {
    type StateItemType = {
        percent: null | string, 
        roubles: null | string, 
        time: null | string
      }
      const [state, setState] = useState<StateItemType>({percent: "", roubles: "", time: ""})
  
      const ChangeHandler = (position: number, newValue: string) => {
          setState({
              percent: position === 1 ? newValue : state.percent, 
              roubles: position === 2 ? newValue : state.roubles, 
              time: position === 3 ? newValue : state.time
          })
      }
      let formula = Number(state.roubles) / ((1 + ((Number(state.percent)/100)*Number(state.time))/12))
    return (
      <div>
          <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Процентов годовых - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
          <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Получим рублей - " addonAfter="руб." placeholder="" value={state.roubles ? state.roubles : ''} />
          <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Количество месяцев - " addonAfter="мес." placeholder="" value={state.time ? state.time : ''} />
          <div className={style.MathJaxInside}>
            <MathComponent display = {false} tex={String.raw`P=\frac{${state.roubles}}{(1 + ${Number(state.percent)/100} \frac{${state.time}}{12})}`}/>
            <span style={{fontSize: "30px"}}>= {formula.toFixed(3)}</span>
          </div>
      </div>
    )
  }
import React, { useState, ChangeEvent } from 'react'
import { Input } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FirstTask() {
    type StateItemType = {
      percent: null | string, 
      years: null | string, 
      roubles: null | string, 
      capitalization: null | string
    }
    const [state, setState] = useState<StateItemType>({percent: "", years: "", roubles: "", capitalization: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            percent: position === 1 ? newValue : state.percent, 
            years: position === 2 ? newValue : state.years, 
            roubles: position === 3 ? newValue : state.roubles, 
            capitalization: position === 4 ? newValue : state.capitalization
        })
    }
    let formula = Number(state.roubles) / ((1 + (Number(state.percent)/100)/Number(state.capitalization))**(Number(state.capitalization)*Number(state.years)))
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Процентов годовых - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Лет на погашение - " addonAfter="лет" placeholder="" value={state.years ? state.years : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Получим рублей - " addonAfter="руб." placeholder="" value={state.roubles ? state.roubles : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(4, e.target.value)}} addonBefore="Частота капитализации - " addonAfter="раз в год" placeholder="" value={state.capitalization ? state.capitalization : ''} />
        <div className={style.MathJaxInside}>
          <MathComponent display = {false} tex={String.raw`P=\frac{${state.roubles}}{(1 + \frac{${Number(state.percent)/100}}{${state.capitalization}})^{${state.capitalization} * ${state.years}}}`}/>
          <span style={{fontSize: "30px"}}>={formula.toFixed(3)}</span>
        </div>
    </div>
  )
}

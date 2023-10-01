import React, { useState, ChangeEvent } from 'react'
import { Input } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FourthTask() {
    type StateItemType = {
      percent: null | string, 
      years: null | string, 
      inflation: null | string, 
    }
    const [state, setState] = useState<StateItemType>({percent: "", years: "", inflation: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            percent: position === 1 ? newValue : state.percent, 
            years: position === 2 ? newValue : state.years, 
            inflation: position === 3 ? newValue : state.inflation, 
        })
    }
    let formula = ((1+(Number(state.percent)/100))*(1+(Number(state.inflation)/100))**(1/Number(state.years)))-1
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Доходность - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Число лет - " addonAfter="лет" placeholder="" value={state.years ? state.years : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Инфляция - " addonAfter="%" placeholder="" value={state.inflation ? state.inflation : ''} />
        <div className={style.MathJaxInside}>
          <MathComponent display = {false} tex={String.raw`1+${Number(state.percent)/100}=\frac{1+i_n}{\sqrt[${state.years}]{${1+(Number(state.inflation)/100)}}}`}/><br/>
          <span>i = {formula.toFixed(3)}</span><span> = {(formula*100).toFixed(1)}%</span>
        </div>
    </div>
  )
}

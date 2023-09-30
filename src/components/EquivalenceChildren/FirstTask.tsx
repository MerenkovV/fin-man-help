import React, { useState, ChangeEvent } from 'react'
import { Input } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FirstTask() {
    type StateItemType = {
      percent: null | string, 
      years: null | string, 
    }
    const [state, setState] = useState<StateItemType>({percent: "", years: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            percent: position === 1 ? newValue : state.percent, 
            years: position === 2 ? newValue : state.years
        })
    }
    let formula = ((1 - ( 1 / (1 + (Number(state.percent)/100)*(Number(state.years)/12)))) * 12) / (Number(state.years))
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Срок платежа - " addonAfter="мес." placeholder="" value={state.years ? state.years : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Процентов годовых - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <div className={style.MathJaxInside}><br/>
        <span>Применяя формулы:</span><br/>
        <MathComponent display = {false} tex={String.raw`\frac{S}{P}=1+i\frac{t}{T}`}/><br/>
        <MathComponent display = {false} tex={String.raw`\frac{S}{P}=\frac{1}{1-d\frac{t}{T}}`}/><br/>
        <span>Выводим:</span><br/>
        <MathComponent display = {false} tex={String.raw`1+i\frac{t}{T}=\frac{1}{1-d\frac{t}{T}}`}/><br/>
        <span>Преобразуем и подставляем:</span><br/>
          <MathComponent display = {false} tex={String.raw`d=\frac{(1-\frac{1}{1+${Number(state.percent)/100}\frac{${state.years}}{12}})×12}{${state.years}}`}/>
          <span>= {formula.toFixed(3)} = {(formula * 100).toFixed(1)}%</span>
        </div>
    </div>
  )
}

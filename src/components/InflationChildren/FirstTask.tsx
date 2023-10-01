import React, { useState, ChangeEvent } from 'react'
import { ConfigProvider, Input, Popover } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FirstTask() {
    type StateItemType = {
      inf1: null | string, 
      inf2: null | string, 
      inf3: null | string, 
      inf4: null | string,
      inf5: null | string
    }
    const [state, setState] = useState<StateItemType>({inf1: "", inf2: "", inf3: "", inf4: "", inf5: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            inf1: position === 1 ? newValue : state.inf1, 
            inf2: position === 2 ? newValue : state.inf2, 
            inf3: position === 3 ? newValue : state.inf3, 
            inf4: position === 4 ? newValue : state.inf4,
            inf5: position === 5 ? newValue : state.inf5
        })
    }
    let ValuePositions = 0
    let SumOfElements = 1
    let SumString = ""

    for (const [key, value] of Object.entries(state)) {
        if (value !== "" && value !== null) {
            if(key !== "inf1") SumString += " × "
            ValuePositions++
            SumOfElements = SumOfElements * (1+(Number(value)/100))
            SumString += (1+(Number(value)/100))
        }
    }

    let formula = (SumOfElements)**(1/ValuePositions)
  return (
    <div>
        <span>*Дефляцию обозначаем, добавляя минус перед числом</span><br/>
        <span>*Можно заполнять не все окна, только начинайте с первого, пожалуйста</span><br/><br/>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Инфляция 1 год - " addonAfter="%" placeholder="" value={state.inf1 ? state.inf1 : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Инфляция 2 год - " addonAfter="%" placeholder="" value={state.inf2 ? state.inf2 : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Инфляция 3 год - " addonAfter="%" placeholder="" value={state.inf3 ? state.inf3 : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(4, e.target.value)}} addonBefore="Инфляция 4 год - " addonAfter="%" placeholder="" value={state.inf4 ? state.inf4 : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(5, e.target.value)}} addonBefore="Инфляция 5 год - " addonAfter="%" placeholder="" value={state.inf5 ? state.inf5 : ''} />

        <div className={style.MathJaxInside}>
            <span>Среденегодовой уровень инфляции :</span><br/>
          <MathComponent display = {false} tex={String.raw`a=\sqrt[${ValuePositions}]{${SumString}}`}/>
          
          <span> = {formula.toFixed(3)}</span>
          <span> = {((formula*100)-100).toFixed(1)} %</span>
        </div>
    </div>
  )
}

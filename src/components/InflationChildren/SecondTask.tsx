import React, { useState, ChangeEvent } from 'react'
import { ConfigProvider, Input, Popover } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function SecondTask() {
    type StateItemType = {
      percent: null | string, 
      duration: null | string, 
      inflation: null | string
    }
    const [state, setState] = useState<StateItemType>({percent: "", duration: "", inflation: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            percent: position === 1 ? newValue : state.percent, 
            duration: position === 2 ? newValue : state.duration, 
            inflation: position === 3 ? newValue : state.inflation
        })
    }
    let formula = ((1 + (Number(state.percent)/100)) / ((1+((Number(state.inflation)/100)))**(1/Number(state.duration)))) - 1
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Ставка - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Число лет - " addonAfter="дней" placeholder="" value={state.duration ? state.duration : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Инфляция - " addonAfter="%" placeholder="" value={state.inflation ? state.inflation : ''} />
        <div className={style.MathJaxInside}><br/>
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 30
                },
            }}
        >
            <span>Используя <Popover content={<MathComponent display = {false} tex={String.raw`i_p=\frac{1 + i_n}{\sqrt[n]{I_n}} - 1`}/>} trigger="click">
        <span style={{color: "#5956ff", cursor: "pointer"}}>формулу </span>
        </Popover>
            :</span><br/>
        </ConfigProvider>
          <MathComponent display = {false} tex={String.raw`i_p=\frac{1 + ${Number(state.percent)/100}}{\sqrt[${state.duration}]{${1+(Number(state.inflation)/100)}}} - 1`}/>
          <span>= {formula.toFixed(3)}</span><span>= {(formula*100).toFixed(1)}%</span>
        </div>
    </div>
  )
}
import React, { useState, ChangeEvent } from 'react'
import { ConfigProvider, Input, Popover } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FirstTask() {
    type StateItemType = {
      percent: null | string, 
      duration: null | string, 
      profitability: null | string
    }
    const [state, setState] = useState<StateItemType>({percent: "", duration: "", profitability: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            percent: position === 1 ? newValue : state.percent, 
            duration: position === 2 ? newValue : state.duration, 
            profitability: position === 3 ? newValue : state.profitability
        })
    }
    let PercentProfitability = Number(state.profitability) * Number(state.duration)
    let formula = ((PercentProfitability + (100 - Number(state.percent)))/Number(state.percent))*(1/Number(state.duration))*100
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Куплено за - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Погашено через - " addonAfter="лет" placeholder="" value={state.duration ? state.duration : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Ставка - " addonAfter="%" placeholder="" value={state.profitability ? state.profitability : ''} />
        <div className={style.MathJaxInside}><br/>
        <span>Так как доход мы не перевкладываем, можем посчитать его простым умножением:</span><br/>
          <MathComponent display = {false} tex={String.raw`S=${state.profitability} × ${state.duration}`}/><span> = {PercentProfitability.toFixed(1)}%</span><br/>
          <ConfigProvider
            theme={{
                token: {
                    fontSize: 25
                },
            }}
        >
          <span>Доходность считаем по <Popover content={<MathComponent display = {false} tex={String.raw`r=\frac{obtained}{invested}×\frac{T}{t}×100%`}/>} trigger="click">
        <span style={{color: "#5956ff", cursor: "pointer"}}>формуле</span>
        </Popover>:</span><br/>
        </ConfigProvider>
          <MathComponent display = {false} tex={String.raw`r=\frac{${PercentProfitability.toFixed(0)} + (100 - ${state.percent})}{${state.percent}}×\frac{1}{${state.duration}}×100%`}/>
          <span>= {formula.toFixed(2)}%</span>
        </div>
    </div>
  )
}
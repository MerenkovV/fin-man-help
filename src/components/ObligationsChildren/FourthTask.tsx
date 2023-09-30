import React, { useState, ChangeEvent } from 'react'
import { Input, Popover, ConfigProvider } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FourthTask() {
    type StateItemType = {
      percent: null | string, 
      duration: null | string,
    }
    const [state, setState] = useState<StateItemType>({percent: "", duration: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            percent: position === 1 ? newValue : state.percent, 
            duration: position === 2 ? newValue : state.duration,
        })
    }
    let formula1 = 100/(((Number(state.percent)*Number(state.duration))/(100*365))+1)
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Доходность - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="До погашения - " addonAfter="дней" placeholder="" value={state.duration ? state.duration : ''} />

        <div className={style.MathJaxInside}><br/>
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 25
                },
            }}
        >
        <span>Исходя из <Popover content={<MathComponent display = {false} tex={String.raw`r=\frac{obtained}{invested}×\frac{T}{t}×100%`}/>} trigger="click">
        <span style={{color: "#5956ff", cursor: "pointer"}}>формулы</span>
        </Popover>:</span><br/>
        </ConfigProvider>
          <MathComponent display = {false} tex={String.raw`${state.percent}=\frac{100 - X}{X}×\frac{365}{${state.duration}}×100%`}/><br/>
          <span>Преобразуем и подставляем:</span><br/>
          <MathComponent display = {false} tex={String.raw`X=\frac{100}{\frac{${state.percent}×${state.duration}}{100×365}+1}`}/>
          <span>= {formula1.toFixed(2)}%</span>
        </div>
    </div>
  )
}
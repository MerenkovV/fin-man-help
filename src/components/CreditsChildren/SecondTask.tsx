import React, { useState, ChangeEvent } from 'react'
import { ConfigProvider, Input, Popover } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function SecondTask() {
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
    let formula = Number(state.roubles) * (((1+((Number(state.percent)/100)/Number(state.capitalization)))**(Number(state.years)*Number(state.capitalization))-1)/((Number(state.percent)/100)/Number(state.capitalization)))
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Величина платежа - " addonAfter="руб." placeholder="" value={state.roubles ? state.roubles : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Лет на погашение - " addonAfter="лет" placeholder="" value={state.years ? state.years : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(4, e.target.value)}} addonBefore="Частота платежей - " addonAfter="раз в год" placeholder="" value={state.capitalization ? state.capitalization : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Ставка - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />

        <div className={style.MathJaxInside}>
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 30
                },
            }}
        >
            <span>Используя <Popover content={<MathComponent display = {false} tex={String.raw`S=R \frac{(1 + (\frac{i}{m}))^{n×m}-1}{(\frac{i}{m})}`}/>} trigger="click">
        <span style={{color: "#5956ff", cursor: "pointer"}}>формулу </span>
        </Popover>
            :</span><br/>
        </ConfigProvider>
          <MathComponent display = {false} tex={String.raw`S=${state.roubles} \frac{(1 + (\frac{${Number(state.percent)/100}}{${state.capitalization}}))^{${state.years} × ${state.capitalization}}-1}{(\frac{${Number(state.percent)/100}}{${state.capitalization}})}`}/><br/>
          
          <span>R = {formula.toFixed(2)} руб.</span>
        </div>
    </div>
  )
}

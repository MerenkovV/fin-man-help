import React, { useState, ChangeEvent } from 'react'
import { Input } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FirstTask() {
    type StateItemType = {
      percent: null | string, 
      duration: null | string, 
      azhio: null | string
    }
    const [state, setState] = useState<StateItemType>({percent: "", duration: "", azhio: ""})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
            percent: position === 1 ? newValue : state.percent, 
            duration: position === 2 ? newValue : state.duration, 
            azhio: position === 3 ? newValue : state.azhio
        })
    }
    let formula = (Number(state.azhio) / Number(state.percent)) * (365/Number(state.duration)) * 100
  return (
    <div>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Куплено за - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Продано через - " addonAfter="дней" placeholder="" value={state.duration ? state.duration : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Ажио - " addonAfter="%" placeholder="" value={state.azhio ? state.azhio : ''} />
        <div className={style.MathJaxInside}><br/>
          <MathComponent display = {false} tex={String.raw`r=\frac{obtained}{invested}×\frac{T}{t}×100% = r=\frac{${state.azhio}}{${state.percent}}×\frac{365}{${state.duration}}×100%`}/>
          <MathComponent display = {false} tex={String.raw`=\frac{${state.azhio}}{${state.percent}}×\frac{365}{${state.duration}}×100%`}/>
          <span>= {formula.toFixed(3)}%</span>
        </div>
    </div>
  )
}
import React, { useState, ChangeEvent } from 'react'
import { ConfigProvider, Input, Popover } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function ThirdTask() {
  type StateItemType = {
    invest: null | string,
    percent: null | string,
    duration: null | string,
    inf1: null | string,
    inf2: null | string,
    inf3: null | string,
    capitalization: null | string,
  }
  const [state, setState] = useState<StateItemType>({ inf1: "", inf2: "", inf3: "", invest: "", percent: "", duration: "", capitalization: "" })

  const ChangeHandler = (position: number, newValue: string) => {
    setState({
      invest: position === 1 ? newValue : state.invest,
      percent: position === 2 ? newValue : state.percent,
      duration: position === 3 ? newValue : state.duration,
      inf1: position === 4 ? newValue : state.inf1,
      inf2: position === 5 ? newValue : state.inf2,
      inf3: position === 6 ? newValue : state.inf3,
      capitalization: position === 7 ? newValue : state.capitalization,
    })
  }

  let formula = Number(state.invest) * ((1+((Number(state.percent)/100)/Number(state.capitalization)))**(Number(state.capitalization)*Number(state.duration)))

  let formula2 = formula/((1+(Number(state.inf1)/100))*(1+(Number(state.inf2)/100))*(1+(Number(state.inf3)/100)))

  return (
    <div>
      <span>*Дефляцию обозначаем, добавляя минус перед числом</span><br />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(1, e.target.value) }} addonBefore="Инвестируем - " addonAfter="руб." placeholder="" value={state.invest ? state.invest : ''} />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(2, e.target.value) }} addonBefore="Под процент - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(3, e.target.value) }} addonBefore="На срок - " addonAfter="лет" placeholder="" value={state.duration ? state.duration : ''} />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(7, e.target.value) }} addonBefore="Капитализация - " addonAfter="раз в год" placeholder="" value={state.capitalization ? state.capitalization : ''} />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(4, e.target.value) }} addonBefore="Инфляция 1 год - " addonAfter="%" placeholder="" value={state.inf1 ? state.inf1 : ''} />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(5, e.target.value) }} addonBefore="Инфляция 2 год - " addonAfter="%" placeholder="" value={state.inf2 ? state.inf2 : ''} />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(6, e.target.value) }} addonBefore="Инфляция 3 год - " addonAfter="%" placeholder="" value={state.inf3 ? state.inf3 : ''} />

      <div className={style.MathJaxInside}>
      <ConfigProvider
            theme={{
                token: {
                    fontSize: 30
                },
            }}
        >
            <span>Используя <Popover content={<MathComponent display = {false} tex={String.raw`S_n=P_H (1+\frac{i}{m})^{n×m}`}/>} trigger="click">
        <span style={{color: "#5956ff", cursor: "pointer"}}>формулу </span>
        </Popover>
            :</span><br/>
        
        <MathComponent display={false} tex={String.raw`S_n=${state.invest}(1+\frac{${Number(state.percent)/100}}{${state.capitalization}})^{${state.duration}×${state.capitalization}}`} />
        <span> = {formula.toFixed(3)}</span><br/>

        <span>Используя <Popover content={<MathComponent display = {false} tex={String.raw`S_r=\frac{S_H}{I_n}`}/>} trigger="click">
        <span style={{color: "#5956ff", cursor: "pointer"}}>формулу </span>
        </Popover>
            :</span><br/>
        
        <MathComponent display={false} tex={String.raw`S_r=\frac{${formula.toFixed(3)}}{${1+(Number(state.inf1)/100)}*${1+(Number(state.inf2)/100)}*${1+(Number(state.inf3)/100)}}`} />
        <span> = {formula2.toFixed(3)}</span>
        </ConfigProvider>
      </div>
    </div>
  )
}

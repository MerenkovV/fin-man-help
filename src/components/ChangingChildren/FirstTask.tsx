import React, { useState, ChangeEvent } from 'react'
import { Input, Divider } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FirstTask() {
    type StateItemType = {
      cost1: null | string
      years1: null | string
      newYears1: null | string
      cost2: null | string
      years2: null | string
      newYears2: null | string
      percent: null | string
      capitalization: null | string
    }
    const [state, setState] = useState<StateItemType>({cost1: "", years1: "", newYears1: "", cost2: "", percent: "", years2: "", newYears2: "", capitalization: "",})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
          cost1: position === 1 ? newValue : state.cost1, 
          years1: position === 2 ? newValue : state.years1,
          newYears1: position === 3 ? newValue : state.newYears1, 
          cost2: position === 4 ? newValue : state.cost2,
          years2: position === 5 ? newValue : state.years2, 
          newYears2: position === 6 ? newValue : state.newYears2,
          percent: position === 7 ? newValue : state.percent, 
          capitalization: position === 8 ? newValue : state.capitalization,
        })
    }
    let discontS1 = (1 + (Number(state.percent) / 100)/(Number(state.capitalization)))**(Number(state.capitalization) * Number(state.newYears1))
    let discontS2 = Number(state.cost1) / ((1 + ((Number(state.percent) / 100)/(Number(state.capitalization))))**(Number(state.capitalization) * Number(state.years1)))
    let discontS3 = (1 + (Number(state.percent) / 100)/(Number(state.capitalization)))**(Number(state.capitalization) * Number(state.newYears2))
    let discontS4 = Number(state.cost2) / ((1 + ((Number(state.percent) / 100)/(Number(state.capitalization))))**(Number(state.capitalization) * Number(state.years2)))
    let sumOfDiscontPrev = discontS2 + discontS4
    let sumOfDiscontNext = (1/discontS1) + (1/discontS3)
  return (
    <div>
      <Divider>Первая выплата (до изменения)</Divider>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Заплатить - " addonAfter="руб" placeholder="" value={state.cost1 ? state.cost1 : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Через - " addonAfter="лет" placeholder="" value={state.years1 ? state.years1 : ''} />
        <Divider>Первая выплата (после изменения)</Divider>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Через - " addonAfter="лет" placeholder="" value={state.newYears1 ? state.newYears1 : ''} />
        <Divider>Вторая выплата (до изменения)</Divider>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(4, e.target.value)}} addonBefore="Заплатить - " addonAfter="руб" placeholder="" value={state.cost2 ? state.cost2 : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(5, e.target.value)}} addonBefore="Через - " addonAfter="лет" placeholder="" value={state.years2 ? state.years2 : ''} />
        <Divider>Вторая выплата (после изменения)</Divider>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(6, e.target.value)}} addonBefore="Через - " addonAfter="лет" placeholder="" value={state.newYears2 ? state.newYears2 : ''} />
        <Divider></Divider>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(7, e.target.value)}} addonBefore="Ставка - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(8, e.target.value)}} addonBefore="Частота начислений - " addonAfter="раз в год" placeholder="" value={state.capitalization ? state.capitalization : ''} />
        <div className={style.MathJaxInside}><br/>
        <span>Дисконтируем к нулевому моменту времени:</span><br/>
        <MathComponent display = {false} tex={String.raw`S_{${state.newYears1}} = \frac{X}{(1 + \frac{${Number(state.percent)/100}}{${state.capitalization}})^{${state.capitalization} × ${state.newYears1}}}`}/><MathComponent display = {false} tex={String.raw` = \frac{X}{${discontS1.toFixed(3)}}`}/><br/>

        <MathComponent display = {false} tex={String.raw`S_{${state.years1}} = \frac{${state.cost1}}{(1 + \frac{${Number(state.percent)/100}}{${state.capitalization}})^{${state.capitalization} × ${state.years1}}}`}/><span> = {discontS2.toFixed(3)}</span><br/>

        <MathComponent display = {false} tex={String.raw`S_{${state.newYears2}} = \frac{X}{(1 + \frac{${Number(state.percent)/100}}{${state.capitalization}})^{${state.capitalization} × ${state.newYears2}}}`}/><MathComponent display = {false} tex={String.raw` = \frac{X}{${discontS3.toFixed(3)}}`}/><br/>

        <MathComponent display = {false} tex={String.raw`S_{${state.years2}} = \frac{${state.cost1}}{(1 + \frac{${Number(state.percent)/100}}{${state.capitalization}})^{${state.capitalization} × ${state.years2}}}`}/><span> = {discontS4.toFixed(3)}</span><br/>
        <span>Считаем:</span><br/>
        <MathComponent display = {false} tex={String.raw`S_{${state.years1}} + S_{${state.years2}}=${sumOfDiscontPrev.toFixed(3)}`}/><br/>
        <span>Тогда:</span><br/>
        <MathComponent display = {false} tex={String.raw`X=\frac{${sumOfDiscontPrev.toFixed(3)}}{\frac{X}{${discontS1.toFixed(3)}} + \frac{X}{${discontS3.toFixed(3)}}}`}/><MathComponent display = {false} tex={String.raw`=\frac{${sumOfDiscontPrev.toFixed(3)}}{${sumOfDiscontNext.toFixed(3)}}`}/>
        <span>= {(sumOfDiscontPrev/sumOfDiscontNext).toFixed(3)}</span><br/>

        
          {/* <MathComponent display = {false} tex={String.raw`d=\frac{(1-\frac{1}{1+${Number(state.percent)/100}\frac{${state.years}}{12}})×12}{${state.years}}`}/>
          <span>= {formula.toFixed(3)} = {(formula * 100).toFixed(1)}%</span> */}
        </div>
    </div>
  )
}

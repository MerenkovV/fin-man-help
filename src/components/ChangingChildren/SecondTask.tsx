import React, { useState, ChangeEvent } from 'react'
import { Input, Divider } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function SecondTask() {
  type StateItemType = {
    cost1: null | string
    years1: null | string
    cost2: null | string
    years2: null | string
    percent: null | string
    capitalization: null | string
  }
  const [state, setState] = useState<StateItemType>({ cost1: "", years1: "", cost2: "", percent: "", years2: "", capitalization: "", })

  const ChangeHandler = (position: number, newValue: string) => {
    setState({
      cost1: position === 1 ? newValue : state.cost1,
      percent: position === 2 ? newValue : state.percent,
      capitalization: position === 3 ? newValue : state.capitalization,
      cost2: position === 4 ? newValue : state.cost2,
      years1: position === 5 ? newValue : state.years1,
      years2: position === 6 ? newValue : state.years2,
    })
  }
  let discontS1 = Number(state.cost1) * (1 + ((Number(state.percent)/100)/Number(state.capitalization)))**(Number(state.capitalization) * Number(state.years1))
  let discontS1MinCost = discontS1 - Number(state.cost2)
  let discontS2 = discontS1MinCost * (1 + ((Number(state.percent)/100)/Number(state.capitalization)))**(Number(state.capitalization) * Number(state.years2))
  let discontS4 = Number(state.cost2) / ((1 + ((Number(state.percent) / 100) / (Number(state.capitalization)))) ** (Number(state.capitalization) * Number(state.years2)))
  let sumOfDiscontPrev = discontS1 + discontS4
  let sumOfDiscontNext = (1 / discontS1) + (1 / discontS2)
  return (
    <div>
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(1, e.target.value) }} addonBefore="Вложил - " addonAfter="руб" placeholder="" value={state.cost1 ? state.cost1 : ''} />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(2, e.target.value) }} addonBefore="Под процент - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(3, e.target.value) }} addonBefore="Частота начислений - " addonAfter="раз в год" placeholder="" value={state.capitalization ? state.capitalization : ''} />
      <Divider>Снятие части денег</Divider>
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(4, e.target.value) }} addonBefore="Снял - " addonAfter="руб" placeholder="" value={state.cost2 ? state.cost2 : ''} />
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(5, e.target.value) }} addonBefore="Через - " addonAfter="лет" placeholder="" value={state.years1 ? state.years1 : ''} />
      <Divider>Закрытие счёта</Divider>
      <Input onChange={(e: ChangeEvent<HTMLInputElement>) => { ChangeHandler(6, e.target.value) }} addonBefore="Через - " addonAfter="лет" placeholder="" value={state.years2 ? state.years2 : ''} />

      <div className={style.MathJaxInside}><br />

        <span>Денег на счету к моменту снятия:</span><br />
        <MathComponent display={false} tex={String.raw`S_{${state.years1}} = ${state.cost1} × (1 + \frac{${Number(state.percent)/100}}{${state.capitalization}})^{${state.capitalization} * ${state.years1}} = ${discontS1.toFixed(3)}`} /><br />
        <span>После снятия:</span><br />
        <MathComponent display={false} tex={String.raw`S = ${discontS1.toFixed(3)} - ${state.cost2} = ${discontS1MinCost.toFixed(3)}`}/><br />

        <span>Получено в конце срока:</span><br />

        <MathComponent display={false} tex={String.raw`S_{${Number(state.years2) + Number(state.years1)}} = ${discontS1MinCost.toFixed(3)} × (1 + \frac{${Number(state.percent)/100}}{${state.capitalization}})^{${state.capitalization} * ${state.years2}} = ${discontS2.toFixed(3)}`} /><br/>

        </div>
      </div>
  )
}

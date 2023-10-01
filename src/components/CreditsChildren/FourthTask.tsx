import React, { useState, ChangeEvent } from 'react'
import { Input, Divider } from 'antd';
import { MathComponent } from 'mathjax-react';
import style from '../../css/Children.module.css'

export default function FourthTask() {
    type StateItemType = {
      cost: null | string
      years: null | string
      percent: null | string
      payment1: null | string
      duration1: null | string
      payment2: null | string
      duration2: null | string
      duration3: null | string
    }
    const [state, setState] = useState<StateItemType>({cost: "", years: "", percent: "", payment1: "", duration1: "", payment2: "", duration2: "", duration3: "",})

    const ChangeHandler = (position: number, newValue: string) => {
        setState({
          cost: position === 1 ? newValue : state.cost, 
          years: position === 2 ? newValue : state.years,
          percent: position === 3 ? newValue : state.percent, 
          payment1: position === 4 ? newValue : state.payment1,
          duration1: position === 5 ? newValue : state.duration1, 
          payment2: position === 6 ? newValue : state.payment2, 
          duration2: position === 7 ? newValue : state.duration2,
          duration3: position === 8 ? newValue : state.duration3,
        })
    }

    let NessPayment = Number(state.cost) / (Number(state.years) * 12)

    let FirstPayment = NessPayment + Number(state.cost) * (Number(state.duration1) * (Number(state.percent)/100))/365

    let FirstPaymentMore = Number(state.payment1) - FirstPayment

    let SecondPayment = NessPayment + (Number(state.cost) - FirstPaymentMore) * (Number(state.duration2) * (Number(state.percent)/100))/365

    let SecondPaymentMore = Number(state.payment2) - SecondPayment

    let ThirdPayment = NessPayment + (Number(state.cost) - FirstPaymentMore - SecondPaymentMore) * (Number(state.duration3) * (Number(state.percent)/100))/365
    
  return (
    <div>
      <Divider>О кредите</Divider>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(1, e.target.value)}} addonBefore="Сумма кредита - " addonAfter="руб" placeholder="" value={state.cost ? state.cost : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(2, e.target.value)}} addonBefore="Срок кредита - " addonAfter="лет" placeholder="" value={state.years ? state.years : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(3, e.target.value)}} addonBefore="Ставка - " addonAfter="%" placeholder="" value={state.percent ? state.percent : ''} />
        <Divider>Первая выплата</Divider>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(4, e.target.value)}} addonBefore="Заплатили - " addonAfter="руб." placeholder="" value={state.payment1 ? state.payment1 : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(5, e.target.value)}} addonBefore="Через - " addonAfter="дней" placeholder="" value={state.duration1 ? state.duration1 : ''} />
        <Divider>Вторая выплата</Divider>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(6, e.target.value)}} addonBefore="Заплатили - " addonAfter="руб" placeholder="" value={state.payment2 ? state.payment2 : ''} />
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(7, e.target.value)}} addonBefore="Через - " addonAfter="дней" placeholder="" value={state.duration2 ? state.duration2 : ''} />
        <Divider>Третья выплата</Divider>
        <Input onChange={(e:ChangeEvent<HTMLInputElement>)=>{ChangeHandler(8, e.target.value)}} addonBefore="Через - " addonAfter="дней" placeholder="" value={state.duration3 ? state.duration3 : ''} />
        
        <div className={style.MathJaxInside}><br/>
        <span>Считаем величину обязательного платежа:</span><br/>
        <MathComponent display = {false} tex={String.raw`P_{necessary} = \frac{${state.cost}}{${12 * Number(state.years)}}`}/><span>= {NessPayment} руб.</span><br/><br/>

        <span>Первый платёж (проценты + обязательное):</span><br/>
        <MathComponent display = {false} tex={String.raw`P_{1} = ${NessPayment} + ${state.cost}\frac{${Number(state.percent)/100} × ${state.duration1}}{365}`}/><span>= {FirstPayment.toFixed(3)} руб.</span><br/><br/>
        <span>Первый платёж (дополнительное):</span><br/>
        <MathComponent display = {false} tex={String.raw`${state.payment1} - ${FirstPayment.toFixed(3)}`}/><span>= {FirstPaymentMore.toFixed(3)} руб.</span><br/><br/>
        

        <span>Второй платёж (проценты + обязательное):</span><br/>
        <MathComponent display = {false} tex={String.raw`P_{2} = ${NessPayment} + (${state.cost} - ${FirstPaymentMore.toFixed(2)})\frac{${Number(state.percent)/100} × ${state.duration2}}{365}`}/><span>= {SecondPayment.toFixed(3)} руб.</span><br/><br/>

        <span>Второй платёж (дополнительное):</span><br/>
        <MathComponent display = {false} tex={String.raw`${state.payment2} - ${SecondPayment.toFixed(3)}`}/><span>= {SecondPaymentMore.toFixed(3)} руб.</span><br/><br/>

        <span>Третий платёж (проценты + обязательное):</span><br/>
        <MathComponent display = {false} tex={String.raw`P_{3} = ${NessPayment} + (${state.cost} - ${FirstPaymentMore.toFixed(2)} - ${SecondPaymentMore.toFixed(2)})\frac{${Number(state.percent)/100} × ${state.duration3}}{365}`}/><span>= {ThirdPayment.toFixed(3)} руб.</span><br/><br/>
        </div>
    </div>
  )
}

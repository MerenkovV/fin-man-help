import { Card } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './CreditsChildren/FirstTask';
import SecondTask from './CreditsChildren/SecondTask';
import ThirdTask from './CreditsChildren/ThirdTask';
import CollapseElement from './CollapseElement';
import { ItemType } from './Discont';

export default function Credits() {

    const items: Array<ItemType> = [
        {   key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Для создания через ... лет фонда в размере ... рублей определите размер платежей (... раз в год) по ставке ... % годовых с учетом капитализации</span></Card>,
            children: <FirstTask/>
        },
        {   key: 2,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 2</span>}><span className={CardStyle.subtitle}>Платежи величиной ... рублей вносятся ... раз в год в течение ... лет с начислением на них процентов по ставке ... % годовых методом сложных процентов. Вычислите наращенную сумму аннуитета и коэффициент наращения</span></Card>,
            children: <SecondTask/>
        },
        {   key: 3,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 3</span>}><span className={CardStyle.subtitle}>Ссуда размером ... тыс. рублей выдана на ... года под ... % годовых. Должник по контракту обязан выплачивать долг равными долями вместе с процентами. Рассчитайте сумму платежей (... раз в год)</span></Card>,
            children: <ThirdTask/>
        },
    ]

    return (
        <CollapseElement items={items}/>
    )
}

import { Card } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './DiscontChildren/FirstTask';
import SecondTask from './DiscontChildren/SecondTask';
import ThirdTask from './DiscontChildren/ThirdTask';
import FourthTask from './DiscontChildren/FourthTask';
import CollapseElement from './CollapseElement';

export type ItemType = {
    key: number
    showArrow: false
    label: any
    children: any
}

export default function Discont() {

    const items: Array<ItemType> = [
        {   key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Сколько денег нужно положить в банк под ... % годовых, чтобы через ... лет получить ... тыс. рублей при условии ... капитализации?</span></Card>,
            children: <FirstTask/>
        },
        {   key: 2,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 2</span>}><span className={CardStyle.subtitle}>Вексель на сумму ... рублей выдан на ... дней с начислением по нему процентов по ставке ... % годовых. Банк учел вексель за ... дней до срока оплаты по учетной ставке ... % годовых. Определите сумму, полученную предъявителем векселя, и сумму дохода банка</span></Card>,
            children: <SecondTask/>
        },
        {   key: 3,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 3</span>}><span className={CardStyle.subtitle}>В контракте за оплату коммерческих услуг можно записать к получению либо через ... месяцев – ... рублей, либо непосредственно в момент совершения операции. Рассчитайте минимальную сумму, которую выгодно получить в момент совершения операции, если банковская ставка составляет ... % годовых с учетом капитализации.</span></Card>,
            children: <ThirdTask/>
        },
        {   key: 4,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 4</span>}><span className={CardStyle.subtitle}>Вексель стоимостью ... рублей выписанный на ... дней, учитываем в банке через ... дней за ... тыс. рублей. Чему равна учетная ставка? Какую доходность обеспечил себе банк?</span></Card>,
            children: <FourthTask/>
        }

    ]

    return (
        <CollapseElement items={items}/>
    )
}

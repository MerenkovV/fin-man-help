import { Card } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './ChangingChildren/FirstTask';
import CollapseElement from './CollapseElement';
import { ItemType } from './Discont';
import SecondTask from './ChangingChildren/SecondTask';

export default function ChangingContract() {

    const items: Array<ItemType> = [
        {   key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Согласно контракту необходимо заплатить ... руб. через ... года и ... руб. через ... лет. Контракт решили изменить, заплатив два равных платежа через ... и через ... года, считая от нулевого момента времени. Какой величины должен быть каждый из платежей, если процентная ставка ... % годовых при начислении два раза в год?</span></Card>,
            children: <FirstTask/>
        },
        {   key: 2,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 2</span>}><span className={CardStyle.subtitle}>Господин Н. вложил в банк ... рублей. Банк начисляет ... % годовых (начисление процентов ... раз в год). Через ... месяцев господин Н. снял со счета ... рублей, а через ... года закрыл счет. Какую сумму он получил при закрытии счета?</span></Card>,
            children: <SecondTask/>
        },
        {   key: 3,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 3</span>}><span className={CardStyle.subtitle}>Господин Н. положил 3 года назад 5000 руб. в банк, начисляющий каждое полугодие 11 % годовых. Год назад он положил еще 2000 руб., а через 3 года 6 месяцев после этого снял со счета 3500 руб. Спустя 6 месяцев он желает положить на свой счет такую сумму, чтобы еще через год на счету было 10 000. Какую сумму он должен положить на свой счет в последний раз?</span></Card>,
            children: "Потом сделаю"
        }
    ]

    return (
        <CollapseElement items={items}/>
    )
}
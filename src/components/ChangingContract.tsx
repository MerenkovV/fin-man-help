import { Card } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './ChangingChildren/FirstTask';
import CollapseElement from './CollapseElement';
import { ItemType } from './Discont';

export default function ChangingContract() {

    const items: Array<ItemType> = [
        {   key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Согласно контракту необходимо заплатить ... руб. через ... года и ... руб. через ... лет. Контракт решили изменить, заплатив два равных платежа через ... и через ... года, считая от нулевого момента времени. Какой величины должен быть каждый из платежей, если процентная ставка ... % годовых при начислении два раза в год?</span></Card>,
            children: <FirstTask/>
        }
    ]

    return (
        <CollapseElement items={items}/>
    )
}
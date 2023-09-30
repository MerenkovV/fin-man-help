import { Card } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './EquivalenceChildren/FirstTask';
import CollapseElement from './CollapseElement';
import { ItemType } from './Discont';

export default function Equivalence() {

    const items: Array<ItemType> = [
        {   key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Срок платежа по векселю составляет ... месяцев. Эффективность операции учета в банке должна составить ... % годовых. Определить эквивалентное значение учетной ставки.</span></Card>,
            children: <FirstTask/>
        }
    ]

    return (
        <CollapseElement items={items}/>
    )
}
import { Card } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './ObligationsChildren/FirstTask';
import CollapseElement from './CollapseElement';
import { ItemType } from './Discont';

export default function Obligations() {

    const items: Array<ItemType> = [
        {   key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Инвестор приобрел облигации номиналом ...рублей по цене ... % номинала и продал ее через ... дней с ажио ... %, не получив процентных выплат. Определите среднегодовую доходность этой операции.</span></Card>,
            children: <FirstTask/>
        },
        
    ]

    return (
        <CollapseElement items={items}/>
    )
}

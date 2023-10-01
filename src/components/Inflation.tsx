import { Card } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './InflationChildren/FirstTask';
import SecondTask from './InflationChildren/SecondTask';
import ThirdTask from './InflationChildren/ThirdTask';
import FourthTask from './InflationChildren/FourthTask';
import CollapseElement from './CollapseElement';
import { ItemType } from './Discont';

export default function Credits() {

    const items: Array<ItemType> = [
        {   key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Уровень инфляции в первый год составил ... %, во второй год – ... %, в третий год уровень инфляции был ... а четвертый и пятый год сопровождались ...%-й дефляцией. Рассчитайте среднегодовой уровень инфляции</span></Card>,
            children: <FirstTask/>
        },
        {   key: 2,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 2</span>}><span className={CardStyle.subtitle}>Чему равна реальная доходность операции, если ставка банковского процента с учетом инфляции равна 25 %, индекс инфляции за 4 года составил 70 %?</span></Card>,
            children: <SecondTask/>
        },
        {   key: 3,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 3</span>}><span className={CardStyle.subtitle}>Найти реальную стоимость накоплений с учетом инфляции, если мы инвестируем ... рублей под ... % годовых на ... года при капитализации ... раз в год, если уровень инфляции первый год составил ... %, второй год ... %, а третий год была дефляция ... %</span></Card>,
            children: <ThirdTask/>
        },
        {   key: 4,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 4</span>}><span className={CardStyle.subtitle}>Какую ставку процентов с учетом капитализации, учитывающую инфляцию, необходимо установить банку, если он хочет обеспечить реальную доходность своих клиентов ... % годовых? Инфляция за ... года составит ... %.</span></Card>,
            children: <FourthTask/>
        },
    ]

    return (
        <CollapseElement items={items}/>
    )
}

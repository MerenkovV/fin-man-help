import { Card } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './ObligationsChildren/FirstTask';
import SecondTask from './ObligationsChildren/SecondTask';
import ThirdTask from './ObligationsChildren/ThirdTask';
import FourthTask from './ObligationsChildren/FourthTask';
import CollapseElement from './CollapseElement';
import { ItemType } from './Discont';

export default function Obligations() {

    const items: Array<ItemType> = [
        {   key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Инвестор приобрел облигации номиналом ...рублей по цене ... % номинала и продал ее через ... дней с ажио ... %, не получив процентных выплат. Определите среднегодовую доходность этой операции.</span></Card>,
            children: <FirstTask/>
        },
        {   key: 2,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 2</span>}><span className={CardStyle.subtitle}>Облигация куплена по курсу 85 % и будет погашена через 10 лет после покупки. Ежегодные купонные платежи (проценты) выплачиваются в конце года по ставке 5 % годовых от номинальной стоимости облигации. Рассчитайте доходность приобретения этой облигации.</span></Card>,
            children: <SecondTask/>
        },
        {   key: 3,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 3</span>}><span className={CardStyle.subtitle}>Номинал облигации (неважно...) рублей. Облигация трехмесячная, куплена за ... %, продана через ... дней за ... %. Покупатель держал до погашения. Кто обеспечил себе большую доходность?</span></Card>,
            children: <ThirdTask/>
        },
        {   key: 4,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 4</span>}><span className={CardStyle.subtitle}>Определить, за какую цену Вы должны купить облигацию, если желаете обеспечить себе доходность 60 % годовых. До момента погашения 73 дня</span></Card>,
            children: <FourthTask/>
        },
    ]

    return (
        <CollapseElement items={items}/>
    )
}

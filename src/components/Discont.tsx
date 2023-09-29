import React from 'react'
import { Card, ConfigProvider, Collapse } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './DiscontChildren/FirstTask';
import SecondTask from './DiscontChildren/SecondTask';
import ThirdTask from './DiscontChildren/ThirdTask';
import FourthTask from './DiscontChildren/FourthTask';

export default function Discont() {

    type ItemType = {
        key: number
        showArrow: false
        label: any
        children: any
    }

    const items: Array<ItemType> = [
        {   key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Сколько денег нужно положить в банк под I % годовых, чтобы через N лет получить S тыс. рублей при условии M капитализации?</span></Card>,
            children: <FirstTask/>
        },
        {   key: 2,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 2</span>}><span className={CardStyle.subtitle}>Вексель на сумму N рублей выдан на T дней с начислением по нему процентов по ставке I % годовых. Банк учел вексель за t дней до срока оплаты по учетной ставке i % годовых. Определите сумму, полученную предъявителем векселя, и сумму дохода банка</span></Card>,
            children: <SecondTask/>
        },
        {   key: 3,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 3</span>}><span className={CardStyle.subtitle}>В контракте за оплату коммерческих услуг можно записать к получению либо через 6 месяцев – 520 000 рублей, либо непосредственно в момент совершения операции. Рассчитайте минимальную сумму, которую выгодно получить в момент совершения операции, если банковская ставка составляет 18 % годовых с учетом капитализации.</span></Card>,
            children: <ThirdTask/>
        },
        {   key: 4,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 4</span>}><span className={CardStyle.subtitle}>Вексель стоимостью 20 тыс. рублей выписанный на 100 дней, учитываем в банке через 90 дней за 18,5 тыс. рублей. Чему равна учетная ставка? Какую доходность обеспечил себе банк?</span></Card>,
            children: <FourthTask/>
        }

    ]

    return (
        <ConfigProvider
            theme={{
                components: {
                    Collapse: {
                        contentBg: "black",
                        headerPadding: "10px 5px"
                    },
                },
                token: {
                    colorBgContainer: "#303030",
                    colorBorderSecondary: "#5956ff",
                    colorText: "white",
                    colorTextPlaceholder: "#c2c2c2"
                },
            }}
        >
            <Collapse
                ghost
                items={items}
            />

        </ConfigProvider>
    )
}

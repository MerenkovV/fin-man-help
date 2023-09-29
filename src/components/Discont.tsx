import React, { useState } from 'react'
import { Card, ConfigProvider, Collapse } from 'antd';
import CardStyle from '../css/Card.module.css'
import FirstTask from './DiscontChildren/FirstTask';

export default function Discont() {
    //const [taskNumber, setTaskNumber] = useState(0)

    type ItemType = {
        key: number
        showArrow: false
        label: any
        children: any
    }

    const items: Array<ItemType> = [
        {
            key: 1,
            showArrow: false,
            label: <Card style={{ marginLeft: "0px" }} hoverable title={<span className={CardStyle.title}>Задача 1</span>}><span className={CardStyle.subtitle}>Сколько денег нужно положить в банк под I % годовых, чтобы через N лет получить S тыс. рублей при условии M капитализации?</span></Card>,
            children: <FirstTask/>
        },

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

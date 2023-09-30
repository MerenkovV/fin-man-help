import React, { FC } from 'react'
import { ConfigProvider, Collapse } from 'antd';
import { ItemType } from './Discont';

type PropsType={
    items: Array<ItemType>
}

const CollapseElement = (props:PropsType) => {
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
                items={props.items}
            />

        </ConfigProvider>
  )
}

export default CollapseElement
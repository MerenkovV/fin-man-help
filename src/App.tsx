import React from 'react';
import { Tabs, ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import Discont from './components/Discont';
import MainStyle from './css/Main.module.css'

function App() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Дисконтирование',
      children: <Discont/>
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];
  return (
    <ConfigProvider
    theme={{
      components: {
        Tabs: {
          itemColor: "white"
        },
      },
    }}
    >
    <Tabs items={items} className={MainStyle.tabs}/>
    </ConfigProvider>
  );
}

export default App;

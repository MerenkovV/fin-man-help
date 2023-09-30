import { Tabs, ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import Discont from './components/Discont';
import MainStyle from './css/Main.module.css'
import Equivalence from './components/Equivalence';
import ChangingContract from './components/ChangingContract';
import Obligations from './components/Obligations';

function App() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Дисконтирование',
      children: <Discont/>
    },
    {
      key: '2',
      label: 'Эквивалентность процентных ставок',
      children: <Equivalence/>,
    },
    {
      key: '3',
      label: 'Изменение условий контракта',
      children: <ChangingContract/>,
    },
    {
      key: '4',
      label: 'Облигации',
      children: <Obligations/>,
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

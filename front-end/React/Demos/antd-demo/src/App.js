import { ConfigProvider, DatePicker, message } from 'antd'

// 由于 antd 组件默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN'

import 'antd/dist/antd.css'
import './App.css';
import { useState } from 'react';

function App() {
  const [date, setDate] = useState(null)
  const handleChange = value => {
    message.info(`您选择的日期是：${value ? value.format('YYYY年MM月DD日') : '未选择'}`)
    setDate(value)
  }
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <div style={{width: 400, margin: '100px auto'}}>
          <DatePicker onChange={handleChange} />
          <div style={{marginTop: 16}}>
            当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default App;

import React from 'react'
import './styles/styles.scss'
import 'antd/dist/antd.css'
/* import { CloseOutlined, CheckOutlined } from '@ant-design/icons'; */
import Home from './pages/Home'
import { Spin } from 'antd';


export const App = () => {
  const [isLoading,setIsLoading]= React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {setIsLoading(false)}, 1000);
  }, []);  
  

  return (
    <div>           
        <Home/>        
    </div>
  )
}

export default App

       
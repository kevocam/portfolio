import React from 'react'
import './style.scss'
import { motion } from 'framer-motion'; 
import {Context} from '../../context'
import { Switch } from 'antd';


function Header() {

    React.useEffect(() => {       
        
      
    },[] );
    const [show, setShow] = React.useState(true);  
    let {theme, setTheme} = React.useContext(Context);  

    return (
        <div className="header">
            <div className="header__logo">
                <motion.svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tabler" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2F80ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <motion.path  stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <motion.path 
                    d="M8 9l3 3l-3 3" />
                    <motion.line
                    initial={{
                        opacity: 0,                      
                    }}
                    animate={{
                        opacity: 1,  
                        background:"red",                  
                        
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeOut',
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }} 
                    
                    x1="13" y1="15" x2="16" y2="15" />
                    <motion.rect 
                    
                    transition={{
                        duration: 3,
                        ease: 'easeInOut',
                        repeat: 2,
                        repeatType: 'reverse',
                    }}   animate={{ rotate: 140 }} x="4" y="4" width="16" height="16" rx="4" />
                </motion.svg>
            </div>
            <div className="header__toggle">
                    <Switch className="theme__switch bounce-right"
                        onChange={() => {setShow(!show)
                        setTheme(prevTheme => !prevTheme) 
                        }}
                checkedChildren={'🌞'} unCheckedChildren="🌙" defaultChecked 
                />  
            </div>
         
        </div>
    )
}

export default Header


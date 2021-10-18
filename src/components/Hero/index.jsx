import React from 'react'
import developer from '../../assets/developer.svg'
import developerLigth from '../../assets/developerLigth.svg'
import developerNigth from '../../assets/developerNigth.svg'
import { motion } from 'framer-motion'; 
import './style.scss'
import {Context} from '../../context'

function Hero() {
        
    let { theme } = React.useContext(Context);      
    let imgDeveloper = developerLigth
    let colorText = theme ? '#b1bfc9' :"#0669f7" ;
    if(theme){
        imgDeveloper = developerNigth;  
        
    }else{
        imgDeveloper = developerLigth;
    }
    
    return (
        <div className="hero">
            <div className="hero__content">
                <spa className="hero__content--hi">Hi <span className="hero__content--hand">👋</span>, I'm</spa>
                <div className="hero__content--title">
                    <motion.svg version="1.1"
                        width="100%" height="120"
                        xmlns="http://www.w3.org/2000/svg">
                    <text x="70" y="50" font-size="60" text-anchor="middle" fill={colorText}>Kevin </text>
                    <text x="190" y="95" font-size="60" text-anchor="middle" fill={colorText}>Camargo </text>
                    </motion.svg>
                </div>
                          
                 <p className="hero__content--call">and make amazing webs!</p>
                 <p className="hero__content--description"> Web developer, especialized in Front end, autodidact and love the sunsets .</p>
 
            </div>
            <div className="hero__img">
                <img src={imgDeveloper} alt="developer" />
            </div>
        </div>
    )
}

export default Hero

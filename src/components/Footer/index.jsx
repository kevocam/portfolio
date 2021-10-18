import React from 'react'
import './style.scss'
import dev from '../../assets/dev.svg';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import gmail from '../../assets/google-gmail.svg'
function Footer() {
    return (
        <div className="footer">
           <div className="footer__contact">
                 <a href="https://www.linkedin.com/in/kevocam/" rel="nofollow" target="_blanck" >
                    <img src={linkedin} alt="linkedin" />
                    <p>Linkedin</p>
                </a>
                <a href="https://github.com/kevocam" rel="nofollow" target="_blanck">
                    <img src={github} alt="github" />
                    <p>Github</p>
                </a>
                <a href="mailto:kevocam.seo@gmail.com">
                    <img src={gmail} alt="gmail" />                    
                    <p>Correo</p>
                </a>
           </div>
           <div className="footer__info">
               2021
           </div>
        </div>
            
        
    )
}

export default Footer

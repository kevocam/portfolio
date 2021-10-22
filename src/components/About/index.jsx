import React from 'react'
import mercadoPago from '../../assets/mercadoPago.png'
import './style.scss'
import kevo from '../../assets/kevin_camargo.png'
import hacktziLogo from '../../assets/hacktzi.png'
import mercadopagocertificado from '../../assets/mercadopagocertificado.png'
import { Image } from 'antd';

function About() {
    return (
        <div className="about">
            <div className="about__photo">
                {/* <img src={kevo} alt="Kevin Camargo" /> */}
            </div>
            <div className="about__me">
                
                <p>
                    - Hace unos años co-funde una empresa de desarrollo de software, donde mejoré la presencia digital de empresas públicas y privadas, proponiendo e implementando soluciones TI. Aumentamos en un 80% la retención de usuarios, facilitamos la comunicación entre
                    equipos de trabajadores y su comunicación con su público objetivo. 
                    
                </p>
                <p>
                    - Colabore con equipos de desarrollo dando soporte, mantenimiento y creando nuevos aplicativos web en JavaScript, ReactJS, VueJs. Siguiendo buenas practicas, código limpio y testing.  
                </p>
                <p>
                    
                </p>
            </div>
            <div className="about__primes">
                <p className="about__primes--badge">
                    <Image
                                width={200}
                                src={mercadopagocertificado}
                                />
                                   Mercado Pago - Programador certificado
                                
                </p>
                
                <div className="about__primes--mercado">
                  
                </div>
            </div>
        </div>
    )
}

export default About

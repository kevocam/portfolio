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
                    Soy Desarrollador Web con un grado de Ingeniero de Sistemas, tengo más de 2 años de
                    experiencia desarrollando aplicaciones web, desde el análisis, diseño y consumo
                    servicios para integrarlo con el Front end desarrolle proyectos con tecnologías
                    como Sass, JavaScript. ReactJS y VueJS, siguiendo las buenas prácticas de clean
                    code, testing y metodologías ágiles.
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

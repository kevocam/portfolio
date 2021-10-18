import React from 'react'
import  Header  from '../components/Header';
import Hero from '../components/Hero'
import {Context} from '../context'
import Portfolio from '../components/Portfolio'
import Experience from '../components/Experience';
import About from '../components/About'
import Title from '../components/Title'
import Footer from '../components/Footer';
import Tecnologies from '../components/Tecnologies';
import Loader from '../components/Loader';
import {Helmet} from "react-helmet";


function Home() {
    
    let {theme, setTheme} = React.useContext(Context);   
    
    return (
    <div className={`theme  ${theme ? 'dark-theme' : 'light-theme'}`}>  
    
        {/* <Loader /> */}
        <Helmet>
                <meta charSet="utf-8" />
                <title>Albert Kevin Camargo Barreda</title>
                <link rel="canonical" href="https://kevincamargo.com" />
                <meta name="description" content="🚀 Albert Kevin Camargo Barreda - Web developer - Front end - Portafolio, Resume, Experiencia, Técnologias ReactJs, VuejS, Laravel"  />
        </Helmet>

        <Header />                    
        <Hero />   
            <Title title="Portafolio"/>
        <Portfolio />
            <Title title="About me"/>
        <About />
            <Title title="Experiencia"/>
        <Experience />
            <Title title="Tecnologías "/>
        <Tecnologies />
            <Title title="Hablamos?"/>
        <Footer />

    </div>
    )
}

export default Home

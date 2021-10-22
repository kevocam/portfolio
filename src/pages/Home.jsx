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
        <Helmet>                
                <title>Albert Kevin Camargo Barreda</title>
                <link rel="canonical" href="https://kevincamargo.com" />
                <meta name="description" content="🚀 I'm Albert Kevin Camargo Barreda Front end Developer and this is my portafolio. I love JavaScript, ReactJs, VuejS, Laravel"  />
        </Helmet>
        <Header />                    
        <Hero />   
            <Title title="Portafolio Desarrollador Front end"/>
        <Portfolio />
            <Title title="About me"/>
        <About />
            <Title title="Experiencia"/>
        <Experience />
            <Title title="Technologies "/>
        <Tecnologies />
            <Title title="Let's do it?"/>
        <Footer />
    </div>
    )
}
export default Home

import React from 'react'
import js from '../../assets/tecnologies/javascript.svg'
import laravel from '../../assets/tecnologies/laravel.svg'
import react from '../../assets/tecnologies/react.svg'
import vue from '../../assets/tecnologies/vue.svg'
import sass from '../../assets/tecnologies/sass.svg'
import webpack from '../../assets/tecnologies/webpack.svg'
import './style.scss'

function Tecnologies() {
    return (
        <div className="tecnologies">
            <div className="tecnologies__item">
                <img src={js} alt="" />
                <p>JavaScript</p>
            </div>
            <div className="tecnologies__item">
                <img src={laravel} alt="" />
                <p>Laravel</p>
            </div>
            <div className="tecnologies__item">
                <img src={react} alt="" />
                <p>ReactJS</p>
            </div>
            <div className="tecnologies__item">
                <img src={vue} alt="" />
                <p>VueJS</p>
            </div>
            <div className="tecnologies__item">
                <img src={sass} alt="" />
                <p>Sass</p>
            </div>
            <div className="tecnologies__item">
                <img src={webpack} alt="" />
                <p>Webpack</p>
            </div>
        </div>
    )
}

export default Tecnologies

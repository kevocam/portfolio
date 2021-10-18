import React from 'react'
import './style.scss'

function Title(props) {
    return (
        <div className="title">
            <div className="title__lineAfter">
            
            </div>
            <h4 className="title__text">
            {props.title}
            </h4>
            <div className="title__lineBefore">

            </div>
        </div>
    )
}

export default Title

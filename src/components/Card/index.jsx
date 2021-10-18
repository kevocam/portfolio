import React from 'react';
import { Image } from 'antd';
import './style.scss';

function Card(props) {

    let imgs = props.images
    const [visible, setVisible] = React.useState(false);

    const [isOpen, setIsOpen] = React.useState(false)
    const openModal = () =>{
        setIsOpen(true);
    }
    const closeModal = () =>{
        setIsOpen(false);
    }


    return (
        <div className="card">
            <div className="card__img" >   
            <Image
                    preview={{ visible: false }}
                    
                            src={props.cover}
                            onClick={() => setVisible(true)}
                        />
                        <div style={{ display: 'none' }}>
                            <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                {imgs.map( item => <Image src={item} />
                                )}
                            
                            </Image.PreviewGroup>
                        </div>             
            </div>    
            <div className="card__content">
                <div className="card__content--title">
                    <h2>{props.title}</h2>
                </div>
                <div className="card__content--content">
                    <p>{props.description}</p>
                </div>
                <div className="card__content--tech">
                    <em>Stack:</em>
                    <ul>
                        {props.stack.map(e=>(
                            <li>{e}</li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className="card__buttons">
                { 
                    props.online ? (<button type="button" onClick={()=> window.open(props.online, "_blank")} >Ver online</button>) : ""

                }
                { 
                    props.github ? (<button type="button" onClick={()=> window.open(props.github, "_blank")}>Ver repositorio</button>) : ""
                } 
                
                {
                   !props.github && !props.online ? (<button type="button" style={{fontStyle:'italic'}} >No disponible</button>) : ""
                }               
            </div>
            {/* {   isOpen ? (
                    <div className="modal">
                        <div onClick={closeModal} className="modal__button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-minimize" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="5 9 9 9 9 5" />
                                <line x1="3" y1="3" x2="9" y2="9" />
                                <polyline points="5 15 9 15 9 19" />
                                <line x1="3" y1="21" x2="9" y2="15" />
                                <polyline points="19 9 15 9 15 5" />
                                <line x1="15" y1="9" x2="21" y2="3" />
                                <polyline points="19 15 15 15 15 19" />
                                <line x1="15" y1="15" x2="21" y2="21" />
                                </svg>
                        </div>
                        <div className="modal__imgs">
                        <Image
                            preview={{ visible: false }}
                            width={200}
                            src={props.cover}
                            onClick={() => setVisible(true)}
                        />
                        <div style={{ display: 'none' }}>
                            <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                {imgs.map( item => <Image src={item} />
                                )}
                            
                            </Image.PreviewGroup>
                        </div>
                        </div>
                        <div className="overlay">
                            
                        </div>
        
                    </div>

                )   : "" 

            } */}
            
            
        </div>
    )
}


export default Card

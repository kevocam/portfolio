import React from 'react';
import data from '../../InitialState.js'
import './style.scss'
import { Image } from 'antd';
import Card from '../Card';
import Item from 'antd/lib/list/Item';

const Portfolio = () => {
    const [visible, setVisible] = React.useState(false);
    const [img1, setImg1] =React.useState("")
    const [img2, setImg2] =React.useState("")

   /*  const showDetail= (e) => {
        setVisible(true);         
        setImg1(data[e].images[0])
        setImg2(data[e].images[1])
    } */
    return (
        <div className="portfolio">            
            {data.map((item ) =>  (
                <Card
                cover={item.cover}
                title={item.project}
                description={item.description}
                images={item.images}
                stack={item.stack}
                online={item.online}
                github={item.github}
                />               
            ))
        }

        </div>
    );
}

export default Portfolio;

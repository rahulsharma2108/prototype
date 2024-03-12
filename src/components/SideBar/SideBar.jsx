import axios from 'axios';
import { Card } from "../Card/Card"
import './sidebar.scss'
import { useEffect, useState } from 'react';

export const Sidebar = ({selectedNav})=>{
    console.log('selected',selectedNav)
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        axios.get('/data/cards.json').then((data)=>{
            setCards(data.data);
        })
    },[selectedNav])
    return <div className="sidebar">
     {
        cards?.length > 0 && cards.map((card, index)=>{
            return  <Card key={index} title={card.title} img={card.image}/>
        })
     }   
       
    </div>
}
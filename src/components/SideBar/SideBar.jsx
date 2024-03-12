import axios from 'axios';
import { Card } from "../Card/Card"
import './sidebar.scss'
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../common/utils';

export const Sidebar = ({selectedNav})=>{
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        axios.get(`${API_BASE_URL}/data/cards.json`).then((data)=>{
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
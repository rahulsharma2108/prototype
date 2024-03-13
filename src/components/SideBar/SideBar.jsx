import { useEffect, useState } from 'react';
import axios from 'axios';

import { Card } from "../Card/Card"
import { API_BASE_URL } from '../../common/utils';
import { QuestionCard } from '../Card/QuestionCard';

import './sidebar.scss'

export const Sidebar = ({ selectedNav }) => {
    const [cards, setCards] = useState([]);
    const bgCards = ['full-length','half-length'];

    useEffect(() => {
        let url = '/data/cards.json'
        if (selectedNav === 'fav') {
            url = "/data/favorites.json"
        }
        axios.get(`${API_BASE_URL}${url}`).then((data) => {
            setCards(data.data);
        })
    }, [selectedNav])
    return <div className="sidebar">
        {selectedNav !== "profile" && <>
            {
                cards?.length > 0 && cards.map((card, index) => {
                    return <>
                    {bgCards.indexOf(card.layout) > -1 && <Card key={index} title={card.title} img={card.image} layout={card.layout} id={card.id} />}
                    {card.layout === 'with-image' && <QuestionCard displayType='card' title={card.title} image={card.image} id={card.id} key={index}/>}
                    </>

                })
            }
        </>}
        {selectedNav === "profile" && <h1>Profile</h1>}

    </div>
}
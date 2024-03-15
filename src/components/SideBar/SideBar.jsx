import { useEffect, useState } from 'react';
import axios from 'axios';

import { Card } from "../Card/Card"
import { API_HOST, DEFAULT_CAMPAIGN, getImageUrl } from '../../common/utils';
import { QuestionCard } from '../Card/QuestionCard';

import './sidebar.scss'

export const Sidebar = ({ selectedNav }) => {
    const [cards, setCards] = useState([]);
    const bgCards = ['full-length','half-length'];

    useEffect(() => {
        let url = `/${DEFAULT_CAMPAIGN}`
        if (selectedNav === 'fav') {
            url = "/favs"
        }
        axios.get(`${API_HOST}${url}`).then((data) => {
            setCards(data.data.narratives);
        })
    }, [selectedNav])
    return <div className="sidebar">
        {selectedNav !== "profile" && <>
            {
                cards?.length > 0 && cards.map((card, index) => {
                    const bannerUrl = getImageUrl(card.data.banner)
                    return <>
                    {bgCards.indexOf(card.layout) > -1 && <Card key={index} title={card.data.title} img={bannerUrl} layout={card.layout} id={card.id} />}
                    {card.layout === 'with-image' && <QuestionCard displayType='card' title={card.data.title} image={bannerUrl} id={card.id} key={index}/>}
                    </>

                })
            }
        </>}
        {selectedNav === "profile" && <h1>Profile</h1>}

    </div>
}
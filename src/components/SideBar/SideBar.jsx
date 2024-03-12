import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from "../Card/Card"
import './sidebar.scss'
import { API_BASE_URL } from '../../common/utils';

export const Sidebar = ({ selectedNav }) => {
    const [cards, setCards] = useState([]);
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
                    return <Card key={index} title={card.title} img={card.image} layout={card.layout} />

                })
            }
        </>}
        {selectedNav === "profile" && <h1>Profile</h1>}

    </div>
}
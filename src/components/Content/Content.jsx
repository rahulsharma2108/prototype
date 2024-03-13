import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import fav from '../../assets/icons/favorites.png'
import { QuestionCard } from '../Card/QuestionCard'
import './content.scss'
import { API_BASE_URL } from '../../common/utils';
import axios from 'axios';
export const Content = () => {
    const { selectedContentId } = useContext(AppContext);
    console.log("@@@@",selectedContentId)
    const [cardDetails,setCardDetails] = useState(null)
    const [selectedCardDetail,setSelectedCardDetail] = useState(null)

    useEffect(() => {
        let url = '/data/content.json'
       
        axios.get(`${API_BASE_URL}${url}`).then((data) => {
            setCardDetails(data.data);
        })
    }, [])
    useEffect(()=>{
        if(selectedContentId && cardDetails){
            const selectedCard = cardDetails.filter((cardDetail)=>cardDetail.cardId === selectedContentId)
            if(selectedCard){
                setSelectedCardDetail(selectedCard[0])
            }
        }   
    },[selectedContentId, cardDetails])
    return <div className='content'>
        <div className='response'>
            <div className='favorite-icon'>
                <img src={fav}/>
            </div>
            <div className='response-content'>
                {selectedCardDetail && <QuestionCard title={selectedCardDetail.question} image={selectedCardDetail.image}/>}
                {selectedCardDetail && <p>{selectedCardDetail.description}</p>}
            </div>

        </div>
        <input className="input-element" type="text" placeholder='Ask me anything about this' />
    </div>
}
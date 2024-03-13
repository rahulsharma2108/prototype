import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import fav from '../../assets/icons/favorites.png'
import { QuestionCard } from './QuestionCard'
import './content.scss'
import { API_BASE_URL } from '../../common/utils';
import axios from 'axios';
export const Content = () => {
    const { selectedContentId } = useContext(AppContext);
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
    },[selectedContentId])
    return <div className='content'>
        <div className='response'>
            <div className='favorite-icon'>
                <img src={fav}/>
            </div>
            <div className='response-content'>
                <QuestionCard cardDetail={selectedCardDetail}/>
                {!selectedCardDetail &&<p>Mentorship can have a profound impact on both the mentor and mentee? Not only can it provide valuable guidance and support, but it can also lead to personal and professional growth for both parties.
                Here are some key tips:
                Build a strong foundation: Establish a trusting and respectful relationship with your mentee by getting to know them and understanding their goals and needs.
                Be a guide, not a dictator: Rather than telling your mentee what to do, guide them towards discovering their own solutions and making their own decisions.

                Mentorship can have a profound impact on both the mentor and mentee? Not only can it provide valuable guidance and support, but it can also lead to personal and professional growth for both parties.
                Here are some key tips:
                Build a strong foundation: Establish a trusting and respectful relationship with your mentee by getting to know them and understanding their goals and needs.
                • Be a guide, not a dictator: Rather than telling your mentee what to do, guide them towards discovering their own solutions and making their own decisions.

                Mentorship can have a profound impact on both the mentor and mentee? Not only can it provide valuable guidance and support, but it can also lead to personal and professional growth for both parties.
                Here are some key tips:
                Build a strong foundation: Establish a trusting and respectful relationship with your mentee by getting to know them and understanding their goals and needs.
                • Be a guide, not a dictator: Rather than telling your mentee what to do, guide them towards discovering their own solutions and making their own decisions.

                Mentorship can have a profound impact on both the mentor and mentee? Not only can it provide valuable guidance and support, but it can also lead to personal and professional growth for both parties.
                Here are some key tips:
                Build a strong foundation: Establish a trusting and respectful relationship with your mentee by getting to know them and understanding their goals and needs.
                • Be a guide, not a dictator: Rather than telling your mentee what to do, guide them towards discovering their own solutions and making their own decisions.

                Mentorship can have a profound impact on both the mentor and mentee? Not only can it provide valuable guidance and support, but it can also lead to personal and professional growth for both parties.
                Here are some key tips:
                Build a strong foundation: Establish a trusting and respectful relationship with your mentee by getting to know them and understanding their goals and needs.
                • Be a guide, not a dictator: Rather than telling your mentee what to do, guide them towards discovering their own solutions and making their own decisions.

                Mentorship can have a profound impact on both the mentor and mentee? Not only can it provide valuable guidance and support, but it can also lead to personal and professional growth for both parties.
                Here are some key tips:
                Build a strong foundation: Establish a trusting and respectful relationship with your mentee by getting to know them and understanding their goals and needs.
                • Be a guide, not a dictator: Rather than telling your mentee what to do, guide them towards discovering their own solutions and making their own decisions.
                </p>}
                {selectedCardDetail && <p>{selectedCardDetail.description}</p>}
            </div>

        </div>
        <input className="input-element" type="text" placeholder='Ask me anything about this' />
    </div>
}
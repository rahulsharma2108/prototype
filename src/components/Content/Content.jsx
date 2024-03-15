import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../AppContext';
import { QuestionCard } from '../Card/QuestionCard'
import { API_HOST, DEFAULT_CAMPAIGN, getImageUrl } from '../../common/utils';
import './content.scss'
import fav from '../../assets/icons/favorites.png'

export const Content = () => {
    const { selectedContentId } = useContext(AppContext);
    const [selectedCardDetail,setSelectedCardDetail] = useState(null)

    useEffect(() => {
        if(selectedContentId){
        let url = `/${DEFAULT_CAMPAIGN}/narratives/${selectedContentId}`
       
        axios.get(`${API_HOST}${url}`).then((data) => {
            setSelectedCardDetail(data.data);
        })
    }
    }, [selectedContentId])
    
    return <div className='content'>
        <div className='response'>
            <div className='favorite-icon'>
                <img src={fav}/>
            </div>
            <div className='response-content'>
                {selectedCardDetail && <QuestionCard title={selectedCardDetail.data.title} image={getImageUrl(selectedCardDetail.data.banner)}/>}
                {selectedCardDetail && <p>{selectedCardDetail.data.bodytext}</p>}
            </div>

        </div>
        <input className="input-element" type="text" placeholder='Ask me anything about this' />
    </div>
}
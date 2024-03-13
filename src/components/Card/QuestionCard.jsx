import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import mentor from '../../assets/bg/mentor.jpg'
import { API_BASE_URL } from '../../common/utils'
import './questionCard.scss'

export const QuestionCard = ({ id,title, image, displayType }) => {
    const { setSelectedContentId } = useContext(AppContext);
    const onCardClick=()=>{
        if(displayType !== 'card'){
            return false;
        }
        setSelectedContentId(id);
    }
    const imgPath = '/images/'
    return <div className={"question-card-container "+ displayType} onClick={onCardClick}>
        {title ? title : 'How to be a mentor?'}
        <img src={image ? API_BASE_URL+imgPath+image : mentor} />
    </div>
}
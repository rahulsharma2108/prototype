import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './questionCard.scss'

export const QuestionCard = ({ id,title, image, displayType }) => {
    
    const { setSelectedContentId } = useContext(AppContext);
    
    const onCardClick=()=>{
        if(displayType !== 'card'){
            return false;
        }
        setSelectedContentId(id);
    }
    
    return <div className={"question-card-container "+ displayType} onClick={onCardClick}>
        {title}
        <img src={image} />
    </div>
}
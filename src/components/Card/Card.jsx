import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { API_BASE_URL } from '../../common/utils'
import './card.scss'

export const Card = ({ img, title, layout,id }) => {
    const imgPath = '/images/'
    const { setSelectedContentId } = useContext(AppContext);

    const getClassName = ()=>{
        if(layout === "full-length"){
            return "xl-card"
        }else if(layout === "half-length"){
            return "l-card"
        }
        return "full-length"
    }
    const onCardClick=()=>{
        setSelectedContentId(id);
    }
    return <div className={`card-container ${getClassName()}`} style={{backgroundImage: `url(${API_BASE_URL}${imgPath}${img})`}} onClick={onCardClick}>
        <div className='card-content'>
            {title}
        </div>
    </div>
}
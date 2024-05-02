import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './card.scss'

export const Card = ({ img, title, layout,id }) => {

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
    return <div className={`card-container ${getClassName()}`} style={{backgroundImage: `url(${img})`}} onClick={onCardClick}>
        <div className='card-content'>
            {title}
        </div>
    </div>
}
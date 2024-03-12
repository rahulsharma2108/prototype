import { API_BASE_URL } from '../../common/utils'
import './card.scss'

export const Card = ({ img, title, layout }) => {
    const imgPath = '/images/'
    const getClassName = ()=>{
        if(layout === "full-length"){
            return "xl-card"
        }else if(layout === "half-length"){
            return "l-card"
        }
        return "full-length"
    }
    return <div className={`card-container ${getClassName()}`} style={{backgroundImage: `url(${API_BASE_URL}${imgPath}${img})`}}>
        <div className='card-content'>
            {title}
        </div>
    </div>
}
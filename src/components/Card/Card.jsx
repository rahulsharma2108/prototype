import { API_BASE_URL } from '../../common/utils'
import './card.scss'

export const Card = ({ img, title }) => {
    const imgPath = '/images/'
    return <div className="card-container" style={{backgroundImage: `url(${API_BASE_URL}${imgPath}${img})`}}>
        <div className='card-content'>
            {title}
        </div>
    </div>
}
import { getImageUrl } from '../../../common/utils'
import './recommendation.scss'
export const Recommendations = ({recommendations}) => {

    return <div className='recommendation-container'>
        {recommendations.map((recommendation, index)=>{
            return <div className='recommendation-card' key={index}>
                <img className='icon' src={getImageUrl(recommendation.data.icon)}/>
                <div className='text'>{recommendation.data.title}</div>
            </div>
        })
        }
    </div>
}
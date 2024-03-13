import mentor from '../../assets/bg/mentor.jpg'
import { API_BASE_URL } from '../../common/utils'
import './questionCard.scss'

export const QuestionCard = ({ cardDetail }) => {
    const imgPath = '/images/'
    return <div className="question-card-container">
        {cardDetail?.question ? cardDetail.question : 'How to be a mentor?'}
        <img src={cardDetail?.image ? API_BASE_URL+imgPath+cardDetail.image : mentor} />
    </div>
}
import { getImageUrl } from '../../common/utils';
import './testimonial.scss';

const Testimonial = ({ data }) => {
    const { author, cardImage, company, testimonailLink, text, textImage } = data;
    const renderBussCard = () => {
        return <div className="testimonial-card" style={{ backgroundImage: `url(${getImageUrl(cardImage)})` }}>
            <div className='testimonial-card-content'>
                <div className='org-name'>
                    {company}
                </div>
                <a href={testimonailLink} target='_blank'>Read story {'>'} </a>
            </div>
        </div>
    }
    const renderTestimonialText = () => {
        return <div className="testimonial-details" style={{ backgroundImage: `url(${getImageUrl(textImage)})` }}>
            <div className='testimonial-details-content'>
                <q>{text}</q>
                <div className='author'>
                    {author?.name}{author?.designation ? `, ${author?.designation}`:''}</div>
            </div>

        </div>
    }
    return <div className="testimonial-container">
        {renderBussCard()}
        {renderTestimonialText()}
    </div>
}

export default Testimonial
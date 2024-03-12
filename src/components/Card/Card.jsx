import './card.scss'

export const Card = ({ img, title }) => {
    const imgPath = '/images/'
    return <div className="card-container" style={{backgroundImage: `url(${imgPath}${img})`}}>
        <div className='card-content'>
            {title}
        </div>
    </div>
}
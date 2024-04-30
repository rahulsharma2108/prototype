import { useEffect, useRef } from 'react'
import fav from '../../../assets/icons/favorites.png'
import { getImageUrl } from '../../../common/utils'
import { QuestionCard } from '../../Card/QuestionCard'
import { Recommendations } from './Recommendations'
import './contentDetails.scss'
import Stats from '../../Stats/Stats'

export const ContentDetails = ({ contentDetails }) => {

    const newContentRef = useRef(null);

    useEffect(() => {
      // Scroll to the new content when it changes
      if (newContentRef.current) {
        newContentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [contentDetails]);
  
    const renderContentCards = (cards) => {

        return cards.map((card, index) => {
            const {
                title = '',
                banner = '',
                bodytext = '',
                stats,
                followups = []
            } = card?.data || {}
            return <div key={index} className='roll-out'>
                <div className='favorite-icon'>
                    <img src={fav} />
                </div>
                <div className='response-content'>
                    {card && <QuestionCard title={title} image={getImageUrl(banner)} />}
                    {card && <p>{bodytext}</p>}
                    {stats && <Stats headline={stats.headline} data={stats.data}/>}
                    {followups?.length > 0 && <Recommendations recommendations={followups} />}
                </div></div>
        })

    }
    return <>
        {renderContentCards(contentDetails)}
        <div ref={newContentRef}/>
    </>
}
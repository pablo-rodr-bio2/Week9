import './Card.css'
import { Episode } from './hooks/useCardData'

type Cardprops = {
    episode: Episode
}

export const Card = ({ episode }: Cardprops) => {
    return (
        <div className='card__container'>
            <div className='card__name'>{episode.name}</div>
            <div className='card__episode'>{episode.episode}</div>
            <div className='card_date'>{episode.air_date}</div>            
        </div>
    )
}
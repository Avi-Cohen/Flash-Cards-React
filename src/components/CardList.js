import React, { useContext } from 'react'
import {CardContext} from '../contexts/cardContext'
import CardDetails from './CardDetails'

const CardList = () => {
    const { cards } = useContext(CardContext)
    return cards.length ? (
<div className="card-list">
    <ul>
        { cards.map(card => {
            return (<CardDetails card={card} eng={card.eng} />)
        })}
    </ul>

</div>
     ) : (
<div className="empty">No cards to show</div>
     );
}

export default CardList
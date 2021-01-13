import React, { useContext, useState } from 'react'
import { CardContext } from '../contexts/cardContext'


const CardDetails = ({ card }) => {
    const [isFront, flip] = useState(true)
    function handleClick() {
        flip(oldState => !oldState)
    }
    const text = isFront ? card.eng : card.heb;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`
  const { dispatch } = useContext(CardContext);
  return (
    <li>
    <div className={classList} onClick={handleClick}>{text}</div>
    <button className="button" onClick={() => dispatch({type: 'REMOVE_CARD', eng:card.eng})}>Remove</button>
    </li>)
}

export default CardDetails
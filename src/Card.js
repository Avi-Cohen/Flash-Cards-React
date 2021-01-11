import React, {useState} from "react";

export default function Card(card){
  const [isFront, flip] = useState(true)
  function handleClick() {
    flip(oldState => !oldState)
  }
  const text = isFront ? card.eng : card.heb;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`
  return (
    <div className={classList} onClick={handleClick}>{text}</div>
  )
  }




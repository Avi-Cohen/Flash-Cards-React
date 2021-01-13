import React, {useContext, useState} from 'react';
import {CardContext} from '../contexts/cardContext'

const CardForm = () => {
    const { addCard } = useContext(CardContext);
    const [eng, setEng] = useState('');
    const [heb, setHeb] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    addCard(eng,heb);
    setEng('')
    setHeb('')
}
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="card eng" value={eng} onChange={(e) => setEng(e.target.value)} />
            <input type="text" placeholder="card heb" value={heb} onChange={(e) => setHeb(e.target.value)} />
            <input type="submit" value="Add Card" />
        </form>
    )
}

export default CardForm
import React, { createContext, useState } from 'react';

export const CardContext = createContext();

const CardContextProvider = (props) => {
    const [cards, setCards] = useState([
        { eng: 'Hello', heb: 'שלום' },
        { eng: 'World', heb: 'עולם' },
        { eng: 'Rainbow', heb: 'קשת' },
        { eng: 'Target', heb: 'מטרה' },
        { eng: 'Sun', heb: 'שמש' },
        { eng: 'Moon', heb: 'ירח' },
        { eng: 'Peace', heb: 'שלום' },
        { eng: 'Clock', heb: 'שעון' },
        { eng: 'Goal', heb: 'מטרה' },
        { eng: 'Map', heb: 'מפה' },
        { eng: 'Compass', heb: 'מצפן' },
        { eng: 'Rabbi', heb: 'רב' }
    ]);

    const addCard = (eng, heb) => {
        setCards([...cards, { eng, heb }])
    }

    const removeCard = (eng) => {
        setCards(cards.filter(card => card.eng !== eng))
    }
    return (
        <CardContext.Provider value={{ cards, addCard, removeCard }}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;
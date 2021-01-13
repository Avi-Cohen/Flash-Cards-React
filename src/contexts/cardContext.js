import React, { createContext, useReducer, useEffect } from 'react';
import { cardReducer } from '../reducers/cardReducer';


export const CardContext = createContext();


const CardContextProvider = (props) => {
    const dictionary = [
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
    ]
    const [cards, dispatch] = useReducer(cardReducer, dictionary);
    
    return (
        <CardContext.Provider value={{ cards, dispatch }}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;
import React, { useContext } from 'react'
import { CardContext } from '../contexts/cardContext'

const Navbar = () => {
    const { cards } = useContext(CardContext);
    return (
        <div className="navbar">
            <h1>Dictionary Flashcards</h1>
            <p>Currently you have {cards.length} cards to get through...</p>
        </div>
    );
}

export default Navbar;
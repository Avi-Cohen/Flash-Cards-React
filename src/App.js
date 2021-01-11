import React from "react";
import "./styles.css";
import Card from "./Card";
import randomCard from "./RandomCard"
import RandomCard from "./RandomCard";

const testData = [
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
    { eng: 'Rabi', heb: 'רב' }
]


export default function App() {
       return (
            <div className="App">
                <RandomCard />
                <h1>ENG to HEB Flashcards</h1>
                <h2>Click on a card to reaveal the translation</h2>
                <div>
                    {testData.map(card => <Card {...card} />)}
                </div>
                

            </div>
        );
    }



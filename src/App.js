import React from "react";
import "./styles.css";
import FullDictionary from "./FullDictionary"
import RandomCard from "./RandomCard";


export default function App() {
       return (
            <div className="App">
                <h1>ENG to HEB Flashcards</h1>
                <h2>Click on a card to reaveal the translation</h2>
                <FullDictionary />
                <br/>
                <RandomCard />
            </div>
        );
    }



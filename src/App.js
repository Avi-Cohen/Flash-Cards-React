import React from "react";
import "./styles.css";
import Card from "./Card"

export default function App() {
  return (
    <div className="App">
      <h1>ENG to HEB Flashcards</h1>
      <h2>Click on a card to reaveal the translation</h2>
      <Card frontSide='Hello' backSide='שלום'/>
      <Card frontSide='Peace' backSide='שלום'/>
      <Card frontSide='World' backSide='עולם'/>
      <Card frontSide='Goal' backSide='מטרה'/>
      <Card frontSide='Target' backSide='מטרה'/>
    </div>
  );
}

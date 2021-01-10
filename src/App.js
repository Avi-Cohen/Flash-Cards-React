import React from "react";
import "./styles.css";
import Card from "./Card"

export default function App() {
  return (
    <div className="App">
      <h1>ENG to HEB Flashcards</h1>
      <h2>Click on a card to reaveal the translation</h2>
      <Card frontSide='Hello' backSide='שלום'/>
      <Card frontSide='World' backSide='עולם'/>
      <Card frontSide='Rainbow' backSide='קשת'/>
      <Card frontSide='Target' backSide='מטרה'/>
      <Card frontSide='Sun' backSide='שמש'/>
      <Card frontSide='Moon' backSide='ירח'/>
      <Card frontSide='Peace' backSide='שלום'/>
      <Card frontSide='Clock' backSide='שעון'/>
      <Card frontSide='Goal' backSide='מטרה'/>
      <Card frontSide='Map' backSide='מפה'/>
      <Card frontSide='Compass' backSide='מצפן'/>
      <Card frontSide='Rabi' backSide='רב'/>
    </div>
  );
}

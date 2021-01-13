import React from "react";
import "./styles.css";
import RandomCard from "./components/RandomCard";
import CardContextProvider from "./contexts/cardContext"
import Navbar from "./components/Navbar"
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";

function App() {
    return (
        <div className="App">
            <CardContextProvider>
                <Navbar />
                <RandomCard/>
                <CardList />
                <CardForm />
            </CardContextProvider>
        </div>
    );
}
export default App;



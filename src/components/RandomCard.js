import React from 'react'
import Card from '../Card'

export default class RandomCard extends React.Component {

    // let randomCard = () => {
    //     return testData[Math.floor(Math.random() * testData.length)]
    // }
    constructor(props) {
        super(props)
        this.state ={
            randomNumber: 0,
            data : [
                {eng:'?', heb:"!"},
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
            ]}

        }
        
        handleButtonClick = () => {
            this.setState( { randomNumber: Math.floor(Math.random() * 12 + 1)})
        }

    render() {
        return (
            <div>
                <div><Card {...this.state.data[this.state.randomNumber]} /> </div>
                <button onClick={this.handleButtonClick}>Draw Random Card</button>
            </div>
        );
    }
}
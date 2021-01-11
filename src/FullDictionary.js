import React from 'react'
import Card from './Card'

export default class RandomCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
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
        }

    }
    render() {
        return (
            <div>
                {this.state.data.map(card => <Card {...card} />)}
            </div>
        );
    }
}
//rce

import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler() { //function keyword not needed
        console.log('Click on Class Component')
    }

    render() {
        return (
            <div>
                {/*this keyword needed*/}
                <button onClick={this.clickHandler}>Click me - class component</button>
            </div>
        )
    }
}

export default EventsClass
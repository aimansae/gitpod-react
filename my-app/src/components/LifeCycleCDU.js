import React, { Component } from 'react'

export class LifeCycleCDU extends Component {
    constructor(props) {
        console.log('Loggin Constructor')
        super(props)

        this.state = {
            greeting: 'Hello'
        }
    }

    updateGreeting = () => {
        console.log('Update Greeting')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello' ? 'Goodbye' : 'Hello'
            }
        })

    }
    componentDidUpdate() {
        console.log('Component updated');
    }

    render() {
        console.log("render method called")
        return (
            
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update</button>
            </div>
        )
    }
}

export default LifeCycleCDU
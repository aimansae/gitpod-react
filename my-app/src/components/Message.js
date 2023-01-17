import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Welcome Visitor',
            buttonText :'Subscribe',

        }
    }
    buttonTexthandler () {
        this.setState({
            buttonText :'Now Subscribed'
         })

    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = { () =>this.buttonTexthandler()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default Message
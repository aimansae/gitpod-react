import React, { Component } from "react";

class CopyClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Helo',
            count:0,
        };
    }
    handleClick = () => {
        this.setState((prevState) => ({
            introduction:prevState.introduction=== 'Helo'?'Bye Bye': 'Helo',
       }),() => console.log('log'))


    }

    increment= () =>{
        this.setState((prevState) => ({
            count : prevState.count +1
            })
        )}           

    render() {
        return(
        <div>
            {this.state.introduction}
            <button onClick = {this.handleClick}>Login</button>
            <button onClick = {this.increment}>{this.state.count}</button>

        </div>
    )}
}

export default CopyClass;

import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <div>Welcome {this.props.name} {this.props.surname}</div>
    ) 
  }
}

export default Welcome
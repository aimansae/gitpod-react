import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:''
      }
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value

        })

    }
  render() {
    return (
      <div>
        <form>
            <label>Username</label>
            <input 
            type='text'
            value={this.state.name}
            onChange={this.handleNameChange}
            />
        </form>
      </div>
    )
  }
}

export default Form
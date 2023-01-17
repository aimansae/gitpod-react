import React, { Component } from 'react'

export class DidMountComponent extends Component {
    constructor(props) {
        console.log('Constructo Called')
      super(props)
    
      this.state = {
         data:'Loading'
      } 
   
    }

    getData() {
        console.log('getData () Called')
        setTimeout(() => {
            console.log('Data fetched!')
            this.setState({
                data:'Loaded'
            })
        }, 3000)
    }

    componentDidMount() {
        console.log('Component did mount')
        this.getData()
    }
  
  
    render() {
        console.log('Render Method called')
    return (
      <div>{this.state.data}</div>
    )
  }
}

export default DidMountComponent
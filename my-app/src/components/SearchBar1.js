import React, { Component } from 'react'
import nameList from '../names'

export class SearchBar1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: nameList

        }
    }
    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        const filteredNames = nameList.filter(name =>{
            return name.toLowerCase().includes(inputText)
        })
  

    this.setState({
        names: filteredNames
    })

}
    render() {
        return (
            <div>
                <h1>Name Search:</h1>
                <p>Matching names:{this.state.names.length}</p>
                <form>
                    <input
                        type='text'
                        placeholder='search names...'
                        onChange = {this.handleChange}
                    />
                    <div>
                        {this.state.names.map(name => {
                            return <p key={name}>{name}</p>
                        })}
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar1
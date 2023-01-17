import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: 'website',
            comments: ''

        }
    }

    handleNameChange = (event) => {
        //let newValue = event.target.value
        // console.log(newValue)
        this.setState({
            name: event.target.value

        })

    }
    handleCartegory = (event) => {
        //let newValue = event.target.value
        // console.log(newValue)
        this.setState({
            category: event.target.value

        })
    }

    handleComments = (event) => {
        //let newValue = event.target.value
        // console.log(newValue)
        this.setState({
            comments: event.target.value

        })

    }
    handleSubmit= (event) =>{
        event.preventDefault();
        console.log(this.state)

    }
    render() {
        return (
            <div>
                <h2>Fill out the form:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>

                        <label htmlFor='id-name'>Your Name:</label>
                        <input
                            type='text'
                            id='id-name' name='name'
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Your Name:</label>

                        <select
                            id='id-category'
                            name='category'
                            value={this.state.category}
                            onChange={this.handleCartegory}

                        >

                            <option value='website'>Website Issue</option>
                            <option value='order'>Order Issue</option>
                            <option value='general'>General Inquiry</option>



                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments</label>
                        <textarea
                            id='id-comments'
                            name='comments'
                            value={this.state.comments}
                            onChange={this.handleComments}
                        />

                    </div>



                    <input type='submit' value='submit' />


                </form>
            </div>

        )
    }
}

export default ControlledForm
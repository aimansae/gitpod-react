import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
        this.inputName = React.createRef();
        this.selectCategory = React.createRef();
        this.inputComments = React.createRef();


    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.inputName.current.value)
        console.log(this.selectCategory.current.value)
        console.log(this.inputComments.current.value)
        
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
                            id='id-name' 
                            name='name'
                            ref={this.inputName}
                            defaultValue = 'Jhon Smith'
                        />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Your Name:</label>

                        <select
                            id='id-category'
                            name='category'
                            ref={this.selectCategory}


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
                            ref={this.inputComments}

                        />

                    </div>



                    <input type='submit' value='submit' />


                </form>
            </div>

        )
    }
}

export default UncontrolledForm
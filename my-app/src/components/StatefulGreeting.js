import React from "react";

// stateful Component remember to extend Component class
// can also be like this
// import React {Component }from "react"; #MAIUSCOLA
//then:
//class StatefulGreeting extends Component{



class StatefulGreeting extends React.Component{

    constructor(props){
    super(props); // always like this to call React.Component class
    //initial tate
    this.state ={ // for properties
        introduction: 'hello',
        buttonText :'Exit',
    };
}

    handleClick(){

        this.setState({
            introduction: 'Goodbye',
            buttonText :'Enter',

        });
        console.log(this.state.introduction)
        console.log(this.state.buttonText)
    }
    render(){
        return(  //() for multiple lines of code
            //react only allows 1 div
        <div>
            <h1>{this.state.introduction} {this.props.name} {this.props.greetings}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
    
    </div>
    )}
        }
export default StatefulGreeting; // in order to import it later



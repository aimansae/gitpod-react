import React from "react";
// stateful Component remember to extend Component class
// can also be like this
// import React {Component }from "react"; #MAIUSCOLA
//then:
//class StatefulGreeting extends Component{



class StetefulGreetingWithPrevState extends React.Component{

    constructor(props){
    super(props); // always like this to call React.Component class
    //initial tate
    this.state ={ // for properties
        introduction: 'Hello',
        buttonText :'Exit',
        count:0,
    };
}

    handleClick(){

        this.setState((prevState, prevProps) => {
            console.log("Prevous state:", prevState)
            console.log("Prevous props:", prevProps)

            return{
                introduction: prevState.introduction === 'Hello'?'Bye Bye':'Hello',
                buttonText: prevState.buttonText === 'Exit'?'Enter':'Exit',

            }   

        })
      
    }

    increment (){
        this.setState((prevState, prevProps) => {
            console.log("Prevous state:", prevState)
            console.log("Prevous props:", prevProps)
            return{
                count: prevState.count +1
            }
        })
            
}
    render() {
        return(  //() for multiple lines of code
            //react only allows 1 div
        <div>
            <h1>{this.state.introduction} {this.props.name} {this.props.greetings}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            <button onClick={() => this.increment()}>{this.state.count}</button>
            <p>You clicked {this.state.count} times</p>
    </div>
    );
}
}
export default StetefulGreetingWithPrevState; // in order to import it later



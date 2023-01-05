import React from "react"; //not required in laterst versions

//Stateless component
function FunctionalGreetingWithProps(props){
    console.log(props)
    return <h1>Hello,{props.name} I see you are {props.age}, {props.greeting}  </h1>
}
//arrow function:
// const FunctionalGreetingWithProps = (props) => {
//     console.log(props)
//     return <h1>Hello Form React</h1>}
///
export default FunctionalGreetingWithProps


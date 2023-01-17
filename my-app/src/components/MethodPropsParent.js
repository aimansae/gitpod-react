//rce

import React, { Component } from "react";
import MethodPropsChild from './MethodPropsChild'
export class MethodPropsParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }
  handleSignin = () =>{
    this.setState ({
      isLogged: true,
      
    });
    console.log('Check Click')

  }

  handleSignout = () =>{
    this.setState({
      isLogged: false,


    })
  }

  render() {
    return (
      <div>
         <MethodPropsChild 
         isLogged={this.state.isLogged}
         handleSignin = {this.handleSignin}
         handleSignout = {this.handleSignout}/>

      </div>
    );
  }
}

export default MethodPropsParent;

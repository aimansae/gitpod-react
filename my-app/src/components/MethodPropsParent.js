//rce

import React, { Component } from "react";
import MethodPropsChild from './MethodPropsChild'

export class MethodPropsParent extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }

  handleSignIn = () => {
    this.setState({
    isLogged: true,

  })
    console.log(this);
  }

  handleSignOut = () => {
    this.setState({
    isLogged: false,

  })
    console.log(this);
  }
  render() {
    return (
      <div>
        <MethodPropsChild 
        isLogged={this.state.isLogged}
        handleSignIn= {this.handleSignIn}
        handleSignOut={this.handleSignOut}
        />
      </div>
    );
  }
}

export default MethodPropsParent;

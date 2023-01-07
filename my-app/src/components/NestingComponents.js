//rce

import React, { Component } from "react";
import Userdata from "./Userdata";
import UserMessage from "./UserMessage";

export class NestingComponents extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      isLogged: false,
    };
  }
  render() {
    return (
      <div>
        <Userdata isLoaded={this.state.isLoaded}/>
        <UserMessage isLogged={this.state.isLogged}/>
      </div>
    );
  }
}

export default NestingComponents;

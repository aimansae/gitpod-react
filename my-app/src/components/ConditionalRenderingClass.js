//rce

import React, { Component } from "react";

export class ConditionalRenderingClass extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      isLogged: true,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? "Data Loaded" : "Loading.."}</h1>
        {this.state.isLogged ? (
          <div>
            <p>Welcome to the site</p>
            <ol>
              <li>Confirm Email</li>
              <li>Cnfirm Profile</li>
              <li>Sbscribe</li>
            </ol>
          </div>
        ) : (
          <p>Please Sign In</p>
        )}
      </div>
    );
  }
}

export default ConditionalRenderingClass;

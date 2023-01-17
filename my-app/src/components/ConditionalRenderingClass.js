//rce

import React, { Component } from "react";

export class ConditionalRenderingClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      isLogged: true,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? "Loaded" : "Loading"}</h1>
        {this.state.isLogged ? (
          <div>
            <p>Welcome to the site</p>
            <ol>
              <li>Step 1</li>
              <li>Complete 2</li>
              <li>Complete 3</li>
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

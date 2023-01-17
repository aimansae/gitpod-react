//rfce

import React from 'react'

function MethodPropsChild(props) {
  return (
    <div>
      {
      props.isLogged ? (
      <div>
        <p>Welcome to the site</p>
        <ol>
          <li>Step 1</li>
          <li>Complete 2</li>
          <li>Complete 3</li>
        </ol>
        <button onClick={props.handleSignout}>Signout</button>

      </div>
    ) : (
      <div>
        <p>Please Sign In</p>
        <button onClick={props.handleSignin}>sign In</button>
        </div>
    )}</div>
        )
}

        export default MethodPropsChild
//rfce

import React from 'react'

function UserMessage(props) {
  return (
    <div>{props.isLogged ? (
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
    )}</div>
  )
}

export default UserMessage
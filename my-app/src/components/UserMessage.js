//rfce

import React from 'react'

function UserMessage(props) {
  return (
    <div>
         {props.isLogged ? (
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
  )
}

export default UserMessage
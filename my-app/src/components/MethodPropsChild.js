import React from "react";

function MethodPropsChild(props) {
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
       <button onClick= {props.handleSignOut}>Signout</button>

     </div>
   ) : (
    <div>
     <p>Please Sign In</p>
     <button onClick= {props.handleSignIn}>Signin</button>
     </div> 
   )}

</div>
  );
}

export default MethodPropsChild;

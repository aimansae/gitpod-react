import React from "react";

function Userdata(props) {
  return (
    <div>
      <h1>{props.isLoaded ? "Loaded" : "Loading"}</h1>
    </div>
  );
}

export default Userdata;

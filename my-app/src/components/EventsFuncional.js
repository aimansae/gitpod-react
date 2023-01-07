//rfce

import React from "react";

function EventsFuncional() {
  function clickHandler() {
    console.log("click")
  }

  return (
    <div>
      <button onClick={clickHandler}>Click Me - Functional</button>
    </div>
  );
}

export default EventsFuncional;

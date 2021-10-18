import React, { useState } from "react";
import ReactDOM from "react-dom";

function Room({ onClick }) {
  const [setClicked] = useState("Room is lit");
  const handleClick = () => {
    onClick();
    // Ok, no more clicking.
    setClicked("The room is dark");
  };
  return (
    <div>
      <h1> {setClicked} </h1>
      <button onClick={handleClick}>Lightswitch</button>;
    </div>
  );
}

ReactDOM.render(
  <Room onClick={() => alert("hi")} />,
  document.querySelector("#root")
);

// function App () {
//   const [count] = useState(0)
//   return (
//       <div>
//           <h1>{count}</h1>
//           <button>Change!</button>
//       </div>
//   )
// }

import React, { useReducer, useRef } from "react";
import ReactDOM from "react-dom";

// exercise 2.
const reducer = (state, action) => {
  switch (action.type) {
    case "off":
      return (state = "off");
    case "low":
      return (state = "low");
    case "medium":
      return (state = "medium");
    case "high":
      return (state = "high");
  }
};

function Room() {
  const [items, dispatch] = useReducer(reducer, "");

  return (
    <div className={dispatch.action}>
      <h1> ROOM </h1>
      <button onClick={() => dispatch("off")}>off</button>
      <button onClick={() => dispatch("low")}>low</button>
      <button onClick={() => dispatch("medium")}>medium</button>
      <button onClick={() => dispatch("high")}>high</button>
      <button onClick={() => dispatch("off")}>Turn off</button>
    </div>
  );
}

// exercise 1
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add":
//       return [
//         ...state,
//         {
//           id: state.length,
//           name: action.name,
//         },
//       ];
//     case "remove":
//       return state.filter((_, index) => index !== action.index);
//     case "clear":
//       console.log(state);
//       return (state = []);
//     default:
//       return state;
//   }
// };

// function ShoppingList() {
//   const inputRef = useRef();
//   const [items, dispatch] = useReducer(reducer, []);
//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({
//       type: "add",
//       name: inputRef.current.value,
//     });
//     inputRef.current.value = "";
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         {" "}
//         <input ref={inputRef} />
//       </form>{" "}
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => dispatch({ type: "remove", index })}>
//               X
//             </button>
//           </li>
//         ))}
//       </ul>{" "}
//       <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
//     </>
//   );
// }

// book exercise
// function Counter() {
//   // First render will create the state, and it will
//   // persist through future renders
//   const [sum, dispatch] = useReducer((sum, dispatch) => {
//     return sum + dispatch;
//   }, 0);
//   return (
//     <>
//       {sum}
//       <button onClick={() => dispatch(1)}> Add 1</button>
//     </>
//   );
// }

ReactDOM.render(<Room />, document.querySelector("#root"));

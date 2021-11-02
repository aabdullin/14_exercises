import React, { useReducer, useRef } from "react";
import ReactDOM from "react-dom";

function Room() {
  const levels = ["off", "low", "medium", "high"];

  const initialState = { level: levels[0] };

  function lightReducer(state, action) {
    switch (action.type) {
      case "increment":
        const levelIndex = levels.findIndex((l) => {
          return l === state.level;
        });
        console.log(levelIndex);
        const nextLevel = levelIndex + 1 < levels.length ? levelIndex + 1 : 0;
        return {
          level: levels[nextLevel],
        };
      case "off":
        return {
          level: levels[0],
        };
      default:
        throw new Error();
    }
  }

  const secretKey = "000000";
  function keyPadReducer(state, action) {
    switch (action.type) {
      case "keyEntered":
        if (!secretKey.startsWith(state.keys + action.key)) {
          return {
            keys: "",
          };
        }

        return {
          keys: state.keys + action.key,
        };
      case "reset":
        return {
          keys: "",
        };
      default:
        throw new Error();
    }
  }
  const [keyState, keyDispatch] = useReducer(keyPadReducer, { keys: "" });

  const [state, dispatch] = useReducer(lightReducer, initialState);

  return (
    <div>
      <h1> {`Light is : ${state.level}`} </h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "off" })}>Off</button>
      <h1>{`Keys: ${keyState.keys}`}</h1>
      {Array.from(Array(10).keys()).map((i) => (
        <button
          onClick={() => keyDispatch({ type: "keyEntered", key: `${i}` })}
        >
          {i}
        </button>
      ))}
      <button onClick={() => keyDispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

// exercise 2.
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "off":
//       return (state = "off");
//     case "low":
//       return (state = "low");
//     case "medium":
//       return (state = "medium");
//     case "high":
//       return (state = "high");
//   }
// };

// function Room() {
//   const [items, dispatch] = useReducer(reducer, "");

//   return (
//     <div className={dispatch.action}>
//       <h1> ROOM </h1>
//       <button onClick={() => dispatch("off")}>off</button>
//       <button onClick={() => dispatch("low")}>low</button>
//       <button onClick={() => dispatch("medium")}>medium</button>
//       <button onClick={() => dispatch("high")}>high</button>
//       <button onClick={() => dispatch("off")}>Turn off</button>
//     </div>
//   );
// }

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

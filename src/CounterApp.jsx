import Proptypes from "proptypes";
import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { counter: state.counter + 1 };
    case "DECREASE":
      return { counter: state.counter - 1 };
    case "RESET":
      return { counter: 0 };
    default:
      throw new Error("There's no type of action");
  }
};

const CounterApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{state.counter}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </>
  );
};

CounterApp.prototype = {
  value: Proptypes.number,
};

export default CounterApp;

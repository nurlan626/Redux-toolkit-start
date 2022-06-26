import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../reduxToolkit/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <hr></hr> 
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;

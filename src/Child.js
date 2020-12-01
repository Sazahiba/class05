import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function Child() {
  let counterValue = useContext(CounterContext);
  return (
    <div>
      <h1>Child Component - Context API</h1>
      <h4>Counter value: {counterValue[0]}</h4>
      <button onClick={() => counterValue[1](++counterValue[0])}>Increment Context</button>
      <button onClick={() => counterValue[1](--counterValue[0])}>Decrement Context</button>
    </div>
  );
}
export default Child;

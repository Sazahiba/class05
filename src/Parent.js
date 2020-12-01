import React from "react";
import Child from "./Child";
import AnotherChild from "./AnotherChild";

function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <hr />
      <Child />
      <br />
      <hr />
      <AnotherChild />
      <br />
      <hr />
    </div>
  );
}
export default Parent;

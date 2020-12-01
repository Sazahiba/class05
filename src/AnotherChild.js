import React, {useReducer} from "react";
import CounterReducer from "./CounterReducer"

function AnotherChild(){
    const [state, dispatch] = useReducer(CounterReducer, 0);
    return(
        <div>
            <h1>Child Component - Reducer</h1>
            <h4>Reducer Value: {state}</h4>
            <button onClick={() => dispatch("INCREMENT")}>Increment Reducer</button>
            <button onClick={() => dispatch("DECREMENT")}>Decrement Reducer</button>
        </div>
    );
}
export default AnotherChild;

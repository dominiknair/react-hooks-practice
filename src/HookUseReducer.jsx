import { useReducer } from "react";
function reducer(count,action) {
    switch(action.type) {
        case "decrement":
            return count - 1;
        case "increment":
            return count + 1;
        default:
            throw new Error();
    }
}


function HookUseReducer() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>useReducer hook</h1>
            <h3>
                This hook essentially does the same thing as useState hook but is written a bit differently. 
                The useReducer hook supposedly helps you manage complexity as the code grows
                as when you have more components in your app it becomes more difficult to manage state in a reliable/predictable way, so this hook helps with that
            </h3>
            <h3>    
            The below buttons increment and decrement the counter. It has been implemented using the useReducer hook. 
            </h3>
            <h4>{count}</h4>
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
            <p>---------------------------------------------------------------------------</p>
        </div>
    )
}

export default HookUseReducer
import { useState } from "react";

function HookUseState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>useState hook</h1>
            <h3>Clicking the button below will call the setCount function in our useState hook and update the count state with increments of 1</h3>
            <h3>counter={count}</h3>
            <label>Click to increment counter</label>
            <button onClick={()=>setCount(count+1)}>+</button>
            <p>---------------------------------------------------------------------------</p>
        </div>
        
    )
}

export default HookUseState;
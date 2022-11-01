import { useEffect, useState } from "react"

function HookUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log("hello side effect!")
    })

    return (
        <div>
            <h1>useEffect hook</h1>
            <h3>Clicking the button will increment counter state, because a state in this component is updated/changed it will call the useEffect hook and will do a callback function to console log "hello side effect"</h3>
            <h3>counter={count}</h3>
            <label>Click to increment counter</label>
            <button onClick={()=>setCount(count+1)}>+</button>
            <p>---------------------------------------------------------------------------</p>
        </div>
    )
}

export default HookUseEffect;
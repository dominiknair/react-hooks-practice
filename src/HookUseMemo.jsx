// import { useMemo, useState } from "react"

function HookUseMemo() {
    // const [count, setCount] = useState(0);

    // const expensiveCount = useMemo(() =>{
    //     setCount(count*2);
    // },[count])

    // const incrementCount = () => {
    //     setCount(count+1)
    // }

    return(
        <div>
            <h1>useMemo hook</h1>
            <h3>This hook is used for performance imporvements on expensive computations</h3>
            
            <p>---------------------------------------------------------------------------</p>
        </div>
    )
}

export default HookUseMemo;
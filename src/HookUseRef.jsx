import { useRef } from "react";

function HookUseRef() {
    const count = useRef(0)

    const logCurrentCount = () => {
        count.current++;
        console.log(count.current)
    }

    const myBtn = useRef(null);
    
    const clickIt = () => {
        myBtn.current.click();
    }
    
    const buttonOneClicked = () => {
        console.log("button 1 is clicked")
        clickIt();
    }

    const buttonTwoClicked = () => {
        console.log("Button 2 is clicked")
    }

    return (
        <div>
            <h1>useRef hook</h1>
            <h3>Clicking the button below will increment the count but will not update the UI counter as we are using useRef</h3>
            <h3>{count.current}</h3>
            <button onClick={logCurrentCount}>+</button>
            <h3>
                The below buttons demonstrate how useRef can be used to get a hold of html elements. Button 2 is using useRef via the ref attribute and there is a function that when called will call the .click function on this button to simulate a click
            </h3>
            <h4>If you press Button 1 it will log the Button 1 click (normal click) and then call a function to click Button 2 and then also log that. If you click Button 2 then it will just call the function to log a regular click</h4>
            <br/>
            <button onClick={buttonOneClicked}>Button 1</button>
            <button ref={myBtn} onClick={buttonTwoClicked}>Button 2</button>
            <p>---------------------------------------------------------------------------</p>
        </div>
    )
}

export default HookUseRef;
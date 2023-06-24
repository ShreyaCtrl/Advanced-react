import { useState } from "react";

const UseStateBasics = () => {
    // console.log(useState());
    // let value = useState(1)[0]
    // console.log(value, typeof (value));
    // const func = useState(1)[1];
    // console.log(func);

    // this is array destructing 
    // value is variable of type const and setValue is a function used to update the state 
    // Every time value (variable) changes .... the component is re rendered
    
    const [value, setValue] = useState(0);
    const handleInc = () => {
        setValue(value + 1);
        console.log(value);
    }
    const handleDec = () => {
        setValue(value - 1);
        console.log(value);
    }
    return (
        <div>
            <h1>useState Basics</h1>
            <p>If you check the console for value after clicking you will notice that it is set to value just prior to DOM update <br/> Update on DOM and re render are asynchronous <br/> If you wish for new state value to be logged after rerender on DOM then pass new value to useState using a function so that it occurs synchronously</p>
            <h2>value : {value}</h2>
            <button type="button" className="btn" onClick={handleInc}>Increase</button>
            <button type="button" className="btn" onClick={handleDec}>Decrease</button>
        </div>
    )
}

export default UseStateBasics;
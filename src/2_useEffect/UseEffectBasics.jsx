import { useEffect, useState } from "react";  
export const UseEffectBasics = () => {
    // runs on initial and re render
    // 1st arg - callback cant return promise 
    // so cant make it async 
    // 1st arg cant be asynch but it can contain async function 
    // if dependancy array empty then runs on initial render
    // if dependancy array not empty then runs on initial render and re render if any of the dependancy changes
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const handleInc = () => {
        setValue(value + 1);
        console.log(value);
    }
    const handleInc1 = () => {
        setValue1(value1 + 1);
        console.log(value1);
    }
    useEffect(() => {
        console.log("useEffect called with 2nd arg not set");
    })
    useEffect(() => {
        console.log("useEffect called with 2nd arg set to empty array");
    }, [])
    useEffect(() => {
        console.log("useEffect called with dependancy array set to value");
    }, [value])
    const handleDec = () => {
        setValue(value - 1);
        console.log(value);
    }
    const handleDec1 = () => {
        setValue1(value1 - 1);
        console.log(value1);
    }
    return (
        <div>
            <h1>UseEffect Basics</h1>
            <h2>value : {value}</h2>
            <button type="button" className="btn" onClick={handleInc}>Increase</button>
            <button type="button" className="btn" onClick={handleDec}>Decrease</button>
            <h2>value : {value1}</h2>
            <button type="button" className="btn" onClick={handleInc1}>Increase</button>
            <button type="button" className="btn" onClick={handleDec1}>Decrease</button>
        </div>
    )
}

import { useState } from "react";

const UseStateBetterApproach = () => {
  const [value, setValue] = useState(0);
    const handleInc = () => {
        setTimeout(() => {
            console.log("ls");
            setValue((prevState) => {
                return prevState + 1;
            });
         }, 2000);
    console.log(value);
  };
  // if update on value is placed in a TimeOut function in handleClick (which doesnt update synchronously) then it just calls the Timeout at that instant
  // it grabs the value that state currently has and changes it
  // in such case .... the updated state value wont be proper because it is occuring after a time period
    const handleDec = () => {
      
    setValue((prevState) => {
      return prevState - 1;
    });
    console.log(value);
  };
  return (
    <div>
      <h1>useState Better approach</h1>
      <p>Update on state of value and re render on DOM are synchronous</p>
      <h2>value : {value}</h2>
      <button type="button" className="btn" onClick={handleInc}>
        Increase
      </button>
      <button type="button" className="btn" onClick={handleDec}>
        Decrease
      </button>
    </div>
  );
};

export default UseStateBetterApproach;

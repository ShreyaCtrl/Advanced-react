import { useState, useEffect } from "react";
export const UseEffectCleanUp = () => {
    const [toggle, setToggle] = useState(false);
    const Puppy = ({ name, age, breed, id }) => {
        useEffect(() => {
            let colors = ['red', 'orange', 'deeppink', 'orchid', 'blue', 'black', 'green'];
            // assign a random color to text in p with id = info
            let random = Math.floor(Math.random() * colors.length);
            document.getElementById("info").style.color = colors[random];
            const ID = setInterval(() => {
                console.log("actually expected to login after initial render as the useEffect 2nd arg is []");
            }, 3000);
            return () => {
                console.log("cleaning up the effect");
                clearInterval(ID);
            }
        }, []);
      console.log(name, age, breed, id);
      return (
        <div key={id}>
          <h1>Name : {name}</h1>
          <h1>Age : {age}</h1>
          <h1>Breed : {breed}</h1>
        </div>
      );
    };
    const ToggleState = () => {
        setToggle(() => !toggle);
    }
    return (
        <div>
            <h1>useEffect CleanUp</h1>
            {
                toggle && <Puppy {...{name:"coffee", age: 3, breed: "Pomerian", id: 2}} />
            }
            <p id="info">the change of color occurs due to useEffect inside component Puppy <br/> here the useEffect has its initial render every time the component mounts hence is called multiple times despite of its dependancy array being empty <br/> uncomment the setInterval <br/> the setInterval is called and compiled every time the component renders and the useEffect runs <br/> due to this the Interval is set multiple times just like the useEffect causing too many of the console logs <br/> to avoid this we use clearInterval which stops the logs once the component has unmounted</p>
            <button type="button" className="btn" onClick={ToggleState}>toggle</button>
        </div>
    )
}
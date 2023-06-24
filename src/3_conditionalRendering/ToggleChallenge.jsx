import { useState } from 'react';
const ToggleChallenge = () => {
    const puppy = {
        name: "Coffee",
        age: 3,
        breed: 'Shih Tzu',
        id: 1
    };
    const Puppy = ({ name, age, breed, id }) => {
        console.log(name, age, breed, id);
        return (
            <div key={id}>
                <h1>Name : {name}</h1>
                <h1>Age : {age}</h1>
                <h1>Breed : {breed}</h1>
            </div>
        )
    }
    const [display, setDisplay] = useState(0);
    const ToggleState = () => {
        setDisplay(() => !display);
        // setDisplay()
    }
    return (
      <div>
        <h1>Toggle Challenge</h1>
        <button type="button" className="btn" onClick={ToggleState}>
          {display ? "Show" : "Hide"}
        </button>
        {/* <Puppy {...puppy} key={puppy.id}></Puppy> */}
        {display ? <></> : <Puppy {...puppy} key={puppy.id} />}
      </div>
    );
}
export default ToggleChallenge;
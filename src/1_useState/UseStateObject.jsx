import { useState } from "react";
import { people } from "../data";

const UseStateObject = () => {
  const Person = (props) => {
    const { name, age, hobby, id } = props;
    return (
      <div key={id}>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Hobby : {hobby}</h2>
        <button className="btn" onClick={() => ChangePerson(id)}>
          click me
        </button>
      </div>
    );
  };
  // Batching .... process of grouping state updates into single
  // usefull .... allows react to optimize rendering of components by minimizing number of DOM updates
  const [pers, setPers] = useState(people[0]);
  // console.log(pers);
  const ChangePerson = (id) => {
    console.log(id);
    let index = id % people.length;
    console.log(index);
    setPers(people[index]);
    };
  return (
    <>
      <h1>UseState Object example</h1>
      <Person {...pers} key={pers.id} />
    </>
  );
};
export default UseStateObject;

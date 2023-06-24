import React, {useState} from "react";
import { data, people } from "../data";

export const UseStateArray = () => {
  const [people, setPeople] = useState(data); 
  const Person = (props) => {
    const { name, id } = props;
    const removePerson = (id) => {
      console.log(id);
      // removing the person of that id using filter and re rendering the obtained list again
      // finding from data and then removing that per wont work 
      // finding from data would result in itterating over the element which is already removed from list
      // let per = data.filter((person) => { person.id != id });
      // console.log(per);
      setPeople(
        people.filter((person) => {
          // console.log(person);
          return person.id != id;
        })
      );
    };
    return (
      <div key={id} className="item">
        <h3>{name}</h3>
        {/* need of arrow function to ensure that we can re render every time we want  */}
        <button type="button" className="btn" onClick={() => removePerson(id)}>
          Delete
        </button>
      </div>
    );
  };
  return (
    <div>
      <h1>useState Array Examples</h1>
      {
        people.map((p) => {
          return <Person {...p} key={p.id} />;
        })
      }
      <br/>
      <button type="button" className="btn" onClick={() => setPeople([])}>Clear All</button>
      <br/><br/>
      <button type="button" className="btn" onClick={() => setPeople(data)}>Add All</button>
    </div>
  );  
};

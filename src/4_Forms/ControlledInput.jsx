import { useState } from "react";
import "./Index.css";
export const ControlledInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const handleChange = (e) => {
  //     // console.log(name);
  //     // console.log(email);
  //     setName(e.target.value);
  //     setEmail(e.target.value);
  // }

  const handleClick = (e) => {
    e.preventDefault();
    console.log("handleClick");
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleClick}>
        <h1>Controlled Input</h1>
        <p>
          Despite of entering value we may see the input field empty if dont set
          it in the handleClick <br />
          To handle this we set its value equal to the e.target.value i.e the
          new value which fired the event handler in the function
        </p>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

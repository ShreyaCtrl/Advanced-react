import React from "react";
import { useState } from "react";

export const MultipleInput = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    // if (e.target.name == 'name') {
    //   setUser({ ...user, name: e.target.value})
    // }
    // else if (e.target.name == 'email') {
    //   setUser({ ...user, email: e.target.value})
    // }
    // else if (e.target.name == 'password') {
    //   setUser({ ...user, password: e.target.value });
    // }
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="" className="form">
        <h1>Multiple Input</h1>
        <p>
          For handling multiple inputs of form in single state we use the name
          attribute in input which is used to specify which field has been
          updated
        </p>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
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
            value={user.email}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

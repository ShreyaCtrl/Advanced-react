import React from 'react'

export const FormDataAPI = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const formData = new FormData(e.currentTarget);
        console.log(formData);
        console.log(formData.get('name'));
        console.log(formData.get('email'));
        console.log([...formData.entries()])
        const newUser = Object.fromEntries(formData);
        console.log(newUser);
        // clear all input fields
        e.target.reset();
    }
  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h1>Form Data API</h1>
              <p>Handling input in form without using controlled input</p>
              
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" name="name" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" id="email" name="email" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}

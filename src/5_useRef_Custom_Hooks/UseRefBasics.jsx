import React, { useState, useRef, useEffect } from "react";

export const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refCont = useRef(null);
  const isMount = useRef(false);
  console.log("logged during rendering", refCont);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(refCont.current);
    const name = refCont.current.value;
    console.log(name);
  };
  useEffect(() => {
    console.log("logged after rendering", refCont.current);
  }, []);
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      console.log("logged after initial change of value", refCont.current);
    }
  }, [value]);
  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h1>useRef Basics</h1>
        <p>
          similar to useState but does not re rendering of component <br />
          useful for targeting DOM nodes/elements <br />
          useful for focusing on input fields though can work on any element{" "}
          <br />
          during rendering the refCont is null due to initialization <br />
          after rendering the refCont is the input element as we have set the
          ref attribute for input <br />
        </p>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-input"
            ref={refCont}
            id="name"
          />
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </form>
      <h2>Value : {value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </div>
  );
};

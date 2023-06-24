import React, { useState } from "react";
import { Navbar } from "./Navbar";
import "./index.css";
import { NavbarP } from "./PropDrilling/Navbar";

export const ContextIndex = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div>
          <h1 className="headline">Context API</h1>
          <h1>Passing components down the usual way</h1>
      {showNavbar ? <Navbar /> : null}
      <button className="btn" onClick={() => setShowNavbar(!showNavbar)}>
        Toggle Navbar
          </button>
          <h1>Prop Drilling</h1>
          <NavbarP/>
    </div>
  );
};

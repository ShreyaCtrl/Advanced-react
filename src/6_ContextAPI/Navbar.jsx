import React from "react";
import { useState } from "react";
import { Navlinks } from "./Navlinks";

export const Navbar = () => {
  
  const [user, setUser] = useState({name: 'bob', loggedIn:false});
  const links = { home: "Home", about: "About", contacts: "Contacts", user, setUser };
  return (
    <nav className="navbar">
        <h5>Context API</h5>
      <Navlinks {...links} />
      {/* <button className='btn' type="submit">Login</button> */}
    </nav>
  );
};

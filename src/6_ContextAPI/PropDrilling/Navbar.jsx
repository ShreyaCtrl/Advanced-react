import React from "react";
import { useState, createContext } from "react";
import { NavlinksP } from "./Navlinks";

export const NavbarContext = createContext();
// returns Provider and Consumer
// Provider - component which will provide the value 

export const NavbarP = () => {
  
  const [user, setUser] = useState({name: 'bob', loggedIn:false});
  const states = { user: user, setUser: setUser };
  console.log(states);
  return (
    // these elements inside the provider can be accessed anywhere in the tree 
    <NavbarContext.Provider value={states}>
    <nav className="navbar">
        <h5>Context API</h5>
      <NavlinksP />
      {/* <button className='btn' type="submit">Login</button> */}
    </nav>
    </NavbarContext.Provider>
  );
};

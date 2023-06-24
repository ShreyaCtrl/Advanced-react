import React from 'react'
import { useContext } from 'react';
import { NavbarContext } from './Navbar';

export const UserP = (props) => {
  const { user, setUser } = useContext(NavbarContext);
    // const { user, setUser } = props;
    console.log(user, setUser);
    // console.log(setUser({...user, loggedIn: !user.loggedIn}))
    return (
      <div>
        <button
          type="submit"
          className="btn"
          onClick={() => setUser({ ...user, loggedIn: !user.loggedIn })}
        >
          {user.loggedIn ? "Logout" : "Login"}
        </button>
        {user.loggedIn ?  `Hello there!! ${user.name}`: 'Please Login' }
      </div>
    );
}

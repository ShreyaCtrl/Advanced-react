import React from 'react'

export const User = (props) => {
    const { user, setUser } = props;
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

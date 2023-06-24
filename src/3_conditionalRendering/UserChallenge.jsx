import { useState, useEffect } from "react";
const UserChallenge = () => {
    const [logged, setLogged] = useState(false);
    const User = () => {
        setLogged(() => !logged);
    }
    return (
        <div>
            <h1>Login and Logout</h1>
            {logged?<h2>Hello there, user</h2>: <h2>Login required</h2>}
            <button type="button" className="btn" onClick={User}>{logged?"logout":"login"}</button>
        </div>
    )
}
export default UserChallenge;
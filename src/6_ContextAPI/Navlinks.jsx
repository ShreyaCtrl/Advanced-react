import React from "react";
import { User } from "./User";

export const Navlinks = (props) => {
  const { home, about, contacts, user, setUser } = props;
  console.log("adf");
  console.log(user, setUser);
  return (
    <>
      <ul className="nav-links">
        <li>
          <a href="#">{home}</a>
        </li>
        <li>
          <a href="#">{contacts}</a>
        </li>
        <li>
          <a href="#">{about}</a>
        </li>
      </ul>
      <User user={user} setUser={setUser} />
    </>
  );
};

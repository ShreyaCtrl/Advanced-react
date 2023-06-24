import React from "react";
import { UserP } from "./User";

export const NavlinksP = () => {
  return (
    <>
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">contacts</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserP />
    </>
  );
};

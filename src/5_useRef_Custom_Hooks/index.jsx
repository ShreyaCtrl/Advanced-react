import React from "react";
import "./Index.css";
import { UseRefBasics } from "./UseRefBasics";
import { CustomHooksBasics } from "./CustomHooks";
import { UserChallenge } from "./UserChallenge";

export const UseRefIndex = () => {
  return (
    <div>
      <h1 className="headline">UseRef Hook</h1>
      <UseRefBasics />
      <br />
      <CustomHooksBasics />
      <br />
      <UserChallenge />
    </div>
  );
};

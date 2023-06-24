import { MultipleReturn } from "./MultipleReturn";
import { ShortCircuit } from "./ShortCircuit";
import ToggleChallenge from "./ToggleChallenge";
import UserChallenge from "./UserChallenge";
import { LeverageJs } from "./LeverageJs";

import React from "react";

export const ConditionalIndex = () => {
  return (
    <div>
      <h1 className="headline">Conditional Rendering</h1>
      <MultipleReturn />
      <br />
      <ShortCircuit />
      <br />
      <ToggleChallenge />
      <br />
      <UserChallenge />
      <br />
      <LeverageJs />
      <hr />
    </div>
  );
};

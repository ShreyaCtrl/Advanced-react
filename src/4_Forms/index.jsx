import { ControlledInput } from "./ControlledInput";
import { UserChallenge } from "./UserChallenge";
import { MultipleInput } from "./MultipleInput";
import { OtherInput } from "./OtherInput";
import { FormDataAPI } from "./FormDataAPI";

import React from 'react'

export const FormsIndex = () => {
  return (
    <div>
      <br />
      <h1 className="headline">Forms</h1>
      <ControlledInput />
      <br />
      <UserChallenge />
      <br />
      <MultipleInput />
      <br />
      <OtherInput />
      <br />
      <FormDataAPI />
      <br />
      <hr />
    </div>
  );
}

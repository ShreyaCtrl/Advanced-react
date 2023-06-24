import UseStateBasics from "./useStateBasics";
import { UseStateArray } from "./UseStateArray";
import UseStateObject from "./UseStateObject";
import UseStateBetterApproach from "./UseStateBetterApproach";

export const UseStateIndex = () => {
  return (
    <>
      <h1 className="headline">useState Hook</h1>
      <UseStateBasics />
      <br />
      <UseStateArray />
      <br />
      <UseStateObject />
      <br />
      <UseStateBetterApproach />
      <br />
      <hr />
    </>
  );
};

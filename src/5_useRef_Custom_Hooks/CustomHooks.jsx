import { useState } from "react";
import React from 'react'
import { useToggle } from "./useToggle";

export const CustomHooksBasics = () => {
    const [show, toggle] = useToggle(false);
  return (
      <div>
          <h1>Custom Hooks Basics</h1>
          <button type="submit" className="btn" onClick={toggle}>toggle</button>
          {show  && <h2>UseToggle custom hook works</h2>}
    </div>
  )
}

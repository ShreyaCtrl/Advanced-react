import { useState } from "react";
import React from "react";
const framework = ["react", "angular", "vue", "svelte"];

export const OtherInput = () => {
  const [coffee, setCoffee] = useState(false);
    const [frameWork, setFrameWork] = useState('react');
    
    const handleFrame = (e) => {
        setFrameWork(e.target.value);
    }
  return (
    <div>
      <form action="" className="form">
        <h1>Other Input</h1>
        <div className="form-row">
          <label
            htmlFor="coffee"
            style={{ textAlign: "center" }}
            className="form-label"
          >
            Need Coffee
          </label>
          <input
            type="checkbox"
            id="coffee"
            name="coffee"
            checked={coffee}
            onChange={(e) => setCoffee(e.target.checked)}
            //   className="form-input"
          />
        </div>
        <div className="form-row">
          <label
            htmlFor="framework"
            style={{ textAlign: "center" }}
            className="form-label"
          >
            Frameworks
          </label>
          <select value={frameWork} onChange={handleFrame}>
            {framework.map((fw) => {
              return <option key={framework.indexOf(fw)}>{fw}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

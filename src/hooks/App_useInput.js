import React, { useState } from "react";
import "./styles_hook.css";

const useInput = (initVal, validator) => {
  const [value, setValue] = useState(initVal);

  const onChange = (e) => {
    const newValue = e.target.value;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(newValue);
    }

    if (willUpdate) {
      setValue(newValue);
    }
  };

  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length < 10;
  //const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

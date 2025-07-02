import React, { useState, useEffect, useRef } from "react";
import "./styles_hook.css";

// useRef = document.querySelector 느낌

const useHover = (onHover) => {
  const element = useRef();

  useEffect(() => {
    if (element.current && typeof onHover === "function") {
      element.current.addEventListener("mouseover", onHover);
    }
    return () => {
      if (element.current && typeof onHover === "function") {
        element.current.removeEventListener("mouseover", onHover);
      }
    };
  }, []);

  return element;
};

export default function App() {
  const sayHello = () => console.log("Hovered!");

  const hover = useHover(sayHello);

  return (
    <div className="App">
      <h1 ref={hover}>Hi Hover</h1>
    </div>
  );
}

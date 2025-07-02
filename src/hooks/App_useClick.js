import React, { useState, useEffect, useRef } from "react";
import "./styles_hook.css";

//useRef = 레퍼런스 = document 쿼리셀렉터 같은 느낌

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current && typeof onClick === "function") {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current && typeof onClick === "function") {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};


export default function App() {
  const sayHello = () => console.log("say Hello");

  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi Click</h1>
    </div>
  );
}

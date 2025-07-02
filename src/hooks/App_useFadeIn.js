import React, { useEffect, useRef } from "react";
import "./styles_hook.css";

// fadein css 없이

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }

    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

export default function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);

  return (
    <div className="App">
      <h1 {...fadeInH1}>Fade In 발동</h1>
      <p {...fadeInP}>p태그 FadeIn</p>
    </div>
  );
}

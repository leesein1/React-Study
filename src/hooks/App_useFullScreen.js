import React, { useRef } from "react";
import "./styles_hook.css";

// useFullscreen 훅 정의
const useFullscreen = (onFullS) => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      const el = element.current;

      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen(); // Firefox
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen(); // Chrome, Safari, Opera
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen(); // IE/Edge
      }

      if (onFullS && typeof onFullS === "function") {
        onFullS(true);
      }
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    if (onFullS && typeof onFullS === "function") {
      onFullS(false);
    }
  };

  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "전체화면 진입" : "전체화면 종료");
  };

  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
}

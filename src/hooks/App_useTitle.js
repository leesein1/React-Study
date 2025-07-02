import React, { useState, useEffect } from "react";
import "./styles_hook.css";

// 함수화해서 반환 인자로 기본 title값 받아올 것
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("Loading...");
  // 여기는 현재 1초라는 시간으로 하지만 실사용 시 로딩 완료되면 호출되게 구현
  setTimeout(() => titleUpdater("Home"), 1000);

  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

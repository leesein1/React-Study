import React, { useState } from "react";
import "./styles_hook.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!Array.isArray(allTabs)) {
    console.warn("allTabs must be an array");
    return {
      currentItem: null,
      changeItem: () => {},
    };
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(1, content);

  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>
        <h3>{currentItem?.content}</h3>
      </div>
    </div>
  );
}

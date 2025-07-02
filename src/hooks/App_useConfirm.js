import React, { useState, useEffect, useRef } from "react";
import "./styles_hook.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      if (typeof onCancel === "function") {
        onCancel();
      }
    }
  };

  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting World!");
  const abort = () => console.log("Aborted");

  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  );
}

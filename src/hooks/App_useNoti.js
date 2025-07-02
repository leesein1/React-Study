import React, { useRef } from "react";
import "./styles_hook.css";

//noti 알림 기능
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((Permissions) => {
        if (Permissions === "granted") {
          new Notification(title, options)();
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

export default function App() {
  const trigerNotif = useNotification("알림 전송 완료!");

  return (
    <div className="App">
      <button onClick={trigerNotif}>알림</button>
    </div>
  );
}

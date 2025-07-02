import React, { useEffect, useState } from "react";
import "./styles_hook.css";

// 사용자의 연결이 온/오프라인 상태를 알려줌
// 채팅앱 ,관리자 페이지에서 끊기면 자동 저장 등,, 활용 가능

const useNetwork = (onchange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {

    if (typeof onchange === "function") {
        onchange(navigator.onLine);
    }
        setStatus(navigator.onLine);
    };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

export default function App() {
  const hanldeNetworkChange = (onLine) => {
    console.log(onLine ? "온라인" : "오프라인");
  };

  const onLine = useNetwork(hanldeNetworkChange); // onchange 콜백 없으면 이렇게만

  return (
    <div className="App">
      <h1>{onLine ? "온라인 상태입니다" : "오프라인 상태입니다"}</h1>
    </div>
  );
}

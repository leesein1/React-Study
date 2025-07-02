import React, { useState, useEffect } from "react";
import "./styles_hook.css";
import axios from "axios";
import useAxios from "../components/useAxios";

export default function App() {
    console.log("App component rendered");
    const { loading, data, error, refetch } = useAxios({url : "https://yts.mx/api/v2/list_movies.json"});

    return (
        <div className="App">
            <div>{data && data.status}</div>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

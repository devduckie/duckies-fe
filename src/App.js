import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from './pages/main';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} exact />
        </Routes>
    )
}

export default App;
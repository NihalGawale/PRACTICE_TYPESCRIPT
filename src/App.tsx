import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register/Register";
import Registration from "./components/Registration/Registration";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    </div>
  );
}

export default App;

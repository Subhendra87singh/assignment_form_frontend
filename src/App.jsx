import React from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import Home from "./pages/Home.jsx";
import Router from "./routes/Router.jsx";

function App() {
  return (
    <>
      <div className="w-full h-28">
        <Header />
      </div>
      <Router />
    </>
  );
}

export default App;

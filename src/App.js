import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import About from "./Components/About/About";
import Skills from "./unused/Skills/Skills";
import Projects from "./Components/Profile/Profile";
import ContactMe from "./Components/ContactMe/ContactMe";
import Homepage from "./Components/HomePage/Homepage";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Skills" element={<Skills />} /> */}
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;

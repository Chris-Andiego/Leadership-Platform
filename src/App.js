import React from "react";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Upload from "./Components/Upload";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import './App.css';
import SignUp from "./Components/Signup";
import Login from "./Components/Login";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

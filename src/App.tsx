// import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../src/components/NavBar.jsx";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

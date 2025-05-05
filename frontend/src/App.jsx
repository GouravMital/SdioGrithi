import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from './Components/Navbar'
import Manifesto from "./Pages/Manifesto";
import Discover from "./Pages/Discover";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={"Desc"} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

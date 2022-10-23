import React from "react";
import "./Style.css";
import Dragon from "./Components/Links/Dragon";
import Falcon9 from "./Components/Links/Falcon9";
import FalconHeavy from "./Components/Links/FalconHeavy";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Main-Components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/falcon9" element={<Falcon9 />} />
        <Route path="/falconheavy" element={<FalconHeavy />} />
        <Route path="/dragon" element={<Dragon />} />
      </Routes>
    </>
  );
}

export default App;

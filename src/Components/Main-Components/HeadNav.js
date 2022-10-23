import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeadNav({ isActive, setIsActive, navToggle }) {
  // const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="Nav--main">
      <div className="imgDiv">
        <img src="./Img/logo.png" className="img-logo" />
      </div>
      <nav className="Nav-link">
        <ul>
          <li onClick={() => navigate("/falcon9")}>FALCON 9</li>
          <li onClick={() => navigate("/falconheavy")}>FALCON HEAVY</li>
          <li onClick={() => navigate("/dragon")}>DRAGON</li>
          <li>STAR SHIPE</li>
          <li>HUMAN SPACELIGHT</li>
          <li>STARLINK</li>
          <li>RIDESHARE</li>
        </ul>
      </nav>
      {/* Hambuger Menu */}

      <button
        id="menu-btn"
        className={`hambuger ${isActive ? "open" : ""}`}
        type="button"
        onClick={navToggle}
      >
        <span className="hambuger-top"></span>
        <span className="hambuger-middle"></span>
        <span className="hambuger-bottom"></span>
      </button>
    </div>
  );
}

export default HeadNav;

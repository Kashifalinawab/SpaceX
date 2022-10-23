import React, { useState } from "react";
import Footer from "./Footer";
import HeadNav from "./HeadNav";
import Section from "./Section";

function Home(props) {
  const [isActive, setIsActive] = useState(false);
  const navToggle = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className={`overlay${isActive ? "-show" : ""}`}></div>

      <div
        id="mobile-menu"
        class="mobile-main-menu"
        // className={`show${isActive ? "-menu" : ""}`}
      >
        <ul>
          <li>
            <a href="#">Mission</a>
          </li>
          <li>
            <a href="#">Launches</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Updates</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>

          <li class="mobile-only">
            <a href="falcon9.html">Falcon 9</a>
          </li>
          <li class="mobile-only">
            <a href="falcon-heavy.html">Falcon Heavy</a>
          </li>
          <li class="mobile-only">
            <a href="dragon.html">Dragon</a>
          </li>
          <li class="mobile-only">
            <a href="#">Starship</a>
          </li>
          <li class="mobile-only">
            <a href="#">Human Spaceflight</a>
          </li>
          <li class="mobile-only">
            <a href="#">Rideshare</a>
          </li>
          <li class="mobile-only">
            <a href="#">Starlink</a>
          </li>
        </ul>
      </div>

      <HeadNav
        isActive={isActive}
        setIsActive={setIsActive}
        navToggle={navToggle}
      />
      <Section />
      <Footer />
    </>
  );
}

export default Home;

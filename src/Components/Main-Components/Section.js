import React from "react";

function Section(props) {
  return (
    <div>
      {/* <!-- Section A --> */}
      <section class="section-a">
        <div class="section-inner">
          <h4>Upcoming Launch</h4>
          <h2>CRS-25 Mission</h2>
          <a href="#" class="btn">
            <div class="hover"></div>
            <span>Rewatch</span>
          </a>
        </div>

        <div class="scroll-arrow">
          <svg width="30px" height="20px">
            <path
              stroke="#ffffff"
              fill="none"
              stroke-width="2px"
              d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
            ></path>
          </svg>
        </div>
      </section>

      {/* <!-- Section B --> */}
      <section class="section-b">
        <div class="section-inner">
          <h4>Recent Launch</h4>
          <h2>Starlink Mission</h2>
          <a href="#" class="btn">
            <div class="hover"></div>
            <span>Rewatch</span>
          </a>
        </div>

        <div class="scroll-arrow">
          <svg width="30px" height="20px">
            <path
              stroke="#ffffff"
              fill="none"
              stroke-width="2px"
              d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
            ></path>
          </svg>
        </div>
      </section>

      {/* <!-- Section C --> */}
      <section class="section-c">
        <div class="section-inner">
          <h4>Recent Mission</h4>
          <h2>SES-22 Mission</h2>
          <a href="#" class="btn">
            <div class="hover"></div>
            <span>Rewatch</span>
          </a>
        </div>

        <div class="scroll-arrow">
          <svg width="30px" height="20px">
            <path
              stroke="#ffffff"
              fill="none"
              stroke-width="2px"
              d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
            ></path>
          </svg>
        </div>
      </section>

      {/* <!-- Section D --> */}
      <section class="section-d">
        <div class="section-inner">
          <h4>Recent Launch</h4>
          <h2>Globalstar FM15 Mission</h2>
          <a href="#" class="btn">
            <div class="hover"></div>
            <span>Rewatch</span>
          </a>
        </div>

        <div class="scroll-arrow">
          <svg width="30px" height="20px">
            <path
              stroke="#ffffff"
              fill="none"
              stroke-width="2px"
              d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
            ></path>
          </svg>
        </div>
      </section>

      {/* <!-- Section E --> */}
      <section class="section-e">
        <div class="section-inner">
          <h2>Starship Update</h2>
          <a href="#" class="btn">
            <div class="hover"></div>
            <span>Rewatch</span>
          </a>
        </div>

        <div class="scroll-arrow">
          <svg width="30px" height="20px">
            <path
              stroke="#ffffff"
              fill="none"
              stroke-width="2px"
              d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
            ></path>
          </svg>
        </div>
      </section>

      {/* <!-- Section F --> */}
      <section class="section-f">
        <div class="section-inner">
          <h2>Starship to add NASA astronauts on the moon</h2>
          <a href="#" class="btn">
            <div class="hover"></div>
            <span>Rewatch</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Section;

import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus-wrapper">
        <section className="left">
          <div className="miscelleanous">
            <div className="icons"></div>
          </div>
          <img src="./assets/bg.png" alt="" />
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              fill="none"
              viewBox="0 0 27 27"
            >
              <path
                fill="#9FFCEB"
                d="M.066 13.5 13.5 26.935 26.936 13.5 13.5.065z"
              />
            </svg>
          </span>
        </section>
        <section className="right">
          <h2>Grow your digital business</h2>
          <p>
            The monkey-rope is found in all whalers; but it was only in the
            Pequod that the monkey and his holder were ever tied together. This
            improvement upon the original.
          </p>
          <div className="progress">
            <div className="tasks">
              <span>6K</span>
              <span>Awesome Projects</span>
            </div>
            <div className="tasks">
              <span>10</span>
              <span>Years of Experienced.</span>
            </div>
            <div className="tasks">
              <span>70K</span>
              <span>Satisfied Clients.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

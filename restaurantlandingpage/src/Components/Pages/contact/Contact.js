import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2>Lets talk about your project</h2>
          <p>
            The monkey-rope is found in all whalers; but it was only in the
            Pequod that the monkey and his holder were ev.
          </p>
          <button>
            Contact Us
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#fff"
                  d="M5.879 4.414 7.293 3 13 8.707l-5.707 5.707L5.88 13l4.293-4.293L5.88 4.414Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

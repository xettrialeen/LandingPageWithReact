import React, { useState } from "react";
import { useEffect, useRef } from "react";

let data = [
  {
    id: 1,
    cards: [
      {
        id: 1,
        title: "Sarah Weber",
        description: "Digital Marketing Expert",
        image: "./assets/bg.png",
      },
      {
        id: 2,
        title: "Sarah Weber",
        description: "Digital Marketing Expert",
        image: "./assets/bg.png",
      },
      {
        id: 3,
        title: "Sarah Weber",
        description: "Digital Marketing Expert",
        image: "./assets/bg.png",
      },
    ],
  },
  {
    id: 2,
    cards: [
      {
        id: 1,
        title: "Sarah Weber",
        description: "Digital Marketing Expert",
        image: "./assets/bg.png",
      },
      {
        id: 2,
        title: "Sarah Weber",
        description: "Digital Marketing Expert",
        image: "./assets/bg.png",
      },
      {
        id: 3,
        title: "Sarah Weber",
        description: "Digital Marketing Expert",
        image: "./assets/bg.png",
      },
    ],
  },
];
const Team = () => {
  const [datastate, SetData] = useState(data);


  console.log(datastate);
  return (
    <div className="team">
      <div className="team-wrapper">
        <div className="team-header title">
          <h2>Our team will be help your business</h2>
          <p>
            Being the savage's bowsman, that is, the person who pulled the
            bow-oar in his boat (the second one from forwa.
          </p>
        </div>
        <div className="team-body">
          <div className="carousel">
            <div className="carouselCard">
              {data.map((childData) => {
                return (
                  <section key={childData.id}>
                    {childData.cards.map((childCardsData) => {
                      return (
                        <div
                          key={childCardsData.id}
                          className="carauselcards-card"
                        >
                          <img src={childCardsData.image} alt="" />
                          <div className="title">
                            <div className="title-wrapper">
                              <h3>{childCardsData.title}</h3>
                              <p>{childCardsData.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </section>
                );
              })}
            </div>

            <div className="caraousel-count">
              {data.map((childData) => {
                return (
                  <div
                    key={childData.id}
                    className={`item `}
             
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

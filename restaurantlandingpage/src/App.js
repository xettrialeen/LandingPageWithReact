import React from "react";
import Client from "./Components/Pages/client/Client";
import Header from "./Components/Pages/header/Header";
import Services from "./Components/Pages/services/Services";
import AboutUs from "./Components/Pages/about/About";
import Project from "./Components/Pages/project/Project";
import Team from "./Components/Pages/team/Team";
function App() {
  return (
    <div className="App">
      <Header />
      <Client />
      <Services />
      <AboutUs />
      <Project />
      <Team />
    </div>
  );
}

export default App;

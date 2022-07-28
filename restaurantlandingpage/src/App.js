import React from "react";
import Client from "./Components/Pages/client/Client";
import Header from "./Components/Pages/header/Header";
import Services from "./Components/Pages/services/Services";
import AboutUs from "./Components/Pages/about/About";
import Project from "./Components/Pages/project/Project";
import Team from "./Components/Pages/team/Team";
import Testimonials from "./Components/Pages/testimonials/Testimonials";
import Contact from "./Components/Pages/contact/Contact";
import Footer from "./Components/Pages/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Client />
      <Services />
      <AboutUs />
      <Project />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

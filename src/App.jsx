import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Middle from "./AboutUs/Middle";
import Navbar from "./Navbar/Navbar";
import PartnerSection from "./Partners/PartnerSection";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Contact from "./contactUs/Contact";

function App() {
  return (
    <>
      <div className="w-full">
        <section id="#">
          <Header />
        </section>
        <section id="about_us">
          <Middle />
        </section>
        <section id="">
          <PartnerSection />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="project">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;

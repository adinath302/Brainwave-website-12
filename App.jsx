import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Button from "./Component/Button.jsx";
import "./index.css";
import Header from "./Component/Header.jsx";
import Hero from "./Component/Hero.jsx";
import Benefits from "./Component/Benefits.jsx";
import Colllaboration from "./Component/Colllaboration.jsx";
import Services from "./Component/Services.jsx";
import Pricing from "./Component/Pricing.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Colllaboration />
        <Services />
        <Pricing/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;

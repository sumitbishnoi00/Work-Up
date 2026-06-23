import React from "react";
import Hero from "../home/Hero";
import Waitlist from "../home/Waitlist";
import Card from "../home/Card";
import Working from "../home/Working";
import Recordwork from "../home/Recordwork";
import Faq from "../home/Faq";
import Footertop from "../home/Footertop";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Waitlist />
      <Recordwork />
      <Card />
      <Faq />
      <Working />
      <Footertop />
    </>
  );
};

export default Homepage;

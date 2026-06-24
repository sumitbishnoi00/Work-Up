import React from "react";
import Hero from "../home/Hero";
import Card from "../home/Card";
import Datas from "../home/Datas"
import Waitlist from "../home/Waitlist";
import Working from "../home/Working";
import Recordwork from "../home/Recordwork";
import Faq from "../home/Faq";
import Footertop from "../home/Footertop";
import CardSwiper from "../home/CardSwiper";
import Mission from "../home/Mission"
import Plans from "../home/Plans"

const Homepage = () => {
  return (
    <>
      <Hero />
      <CardSwiper />
      <Mission />
      <Waitlist />
      <Card />
      <Recordwork />
      <Datas />
      <Waitlist />
      <Working />
      <Plans />
      <Faq />
      <Footertop />
    </>
  );
};

export default Homepage;

import React from "react";
import Banner from "../Components/Home/Banner";
import About from "../Components/Home/About";
import Service from "../Components/Home/Service";
import Accordian from "../Components/Home/Accordian";
import Appointment from "../Components/Home/Appointment";
import Cards from "../Components/Home/Cards";
import NeedT from "../Components/Home/NeedT";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Cards></Cards>
      <NeedT></NeedT>
      <Appointment></Appointment>
      <Accordian></Accordian>
    </div>
  );
};

export default Home;

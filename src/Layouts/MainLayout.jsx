import React from "react";
import Nav from "../Components/NavFoot/Nav";
import Foot from "../Components/NavFoot/Foot";
import NavTwo from "../Components/Home/NavTwo";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavTwo></NavTwo>
      <Nav></Nav>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};

export default MainLayout;

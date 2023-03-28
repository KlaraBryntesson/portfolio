import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Root;

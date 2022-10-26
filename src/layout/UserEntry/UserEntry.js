import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";

const UserEntry = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default UserEntry;

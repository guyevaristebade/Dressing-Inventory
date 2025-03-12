import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const DashBoardLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

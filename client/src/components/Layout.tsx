import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";

export const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <HomeHeader
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Outlet />
    </div>
  );
};

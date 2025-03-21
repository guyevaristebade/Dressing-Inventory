import React from "react";
import { Link } from "react-router-dom";
// import { HomeHeader } from "../components";

export const HomePage = () => {
  // const [darkMode, setDarkMode] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* HEADER */}
      {/* <HomeHeader
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      /> */}
      {/* HERO SECTION */}
      <section className="bg-gray-800 min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Gérez votre garde-robe en toute simplicité !
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Centralisez vos vêtements, suivez leur utilisation et recevez des
            rappels de lavage grâce à Dressy.
          </p>
          <div className="mt-6">
            <Link
              to="/signup"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Commencer maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

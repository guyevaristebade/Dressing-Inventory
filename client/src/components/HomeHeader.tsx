import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

type HomeHeaderProps = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};
export const HomeHeader = ({
  darkMode,
  setDarkMode,
  menuOpen,
  setMenuOpen,
}: HomeHeaderProps) => {
  return (
    <header className="bg-whit bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white flex items-center gap-2"
        >
          Dressy{" "}
          <span className="text-blue-500 animate-[shake_0.5s_ease-in-out]">
            👘
          </span>
        </Link>

        {/* Boutons Dark Mode + Auth */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>

          {/* Boutons Connexion/Inscription - Affichés en mode Desktop */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Connexion
            </Link>
            <Link
              to="/signup"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              Inscription
            </Link>
          </div>

          {/* Bouton Menu (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {menuOpen ? (
              <X size={24} className="text-gray-800 dark:text-white" />
            ) : (
              <Menu size={24} className="text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* MENU RESPONSIVE (Mobile) */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-4 px-6 flex flex-col space-y-4 items-center shadow-md">
          <Link
            to="/login"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Connexion
          </Link>
          <Link
            to="/signup"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Inscription
          </Link>
        </div>
      )}
    </header>
  );
};

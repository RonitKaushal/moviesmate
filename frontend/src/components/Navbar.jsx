import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Popcorn, Sun, Moon } from "lucide-react";
import SearchModal from "./SearchModal";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="shadow-xl px-8 h-auto py-2 flex items-center justify-center sticky top-0 z-50 bg-primary-foreground border-b dark:border-border">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex justify-center items-center space-x-3">
        <div className="flex justify-center items-center w-10 h-10">
          <img src="/Movies Mate Logo.png" className="w-full" />
          </div>
          <span className="Non-Natural-Grotesk-Bold text-2xl font-extrabold uppercase dark:text-white">
            Movies Mate
          </span>
        </Link>

        <nav className="Non-Natural-Mono-Light font-bold flex items-center space-x-8">
          <Link
            className="text-base font-medium hover:text-primary transition-colors text-muted-foreground"
            to="/movie"
          >
            Find Movies
          </Link>
          <Link
            className="text-base font-medium hover:text-primary transition-colors text-muted-foreground dark:hover:text-primary"
            to="/random"
          >
            Random
          </Link>
          <Link
            className="text-base font-medium hover:text-primary transition-colors text-muted-foreground dark:hover:text-primary"
            to="/playlists"
          >
            Playlists
          </Link>
          <div className="relative flex justify-center items-start w-auto h-full">
            <SearchModal />
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="icon"
              className="mx-3 text-muted-foreground border-2 border-border rounded-lg transition-all duration-200"
            >
              {darkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </Button>

            {/* //////////// */}

            {/* //////////// */}
            <Link to="/login">
              <Button className="relative inline-flex h-9 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a2aeff_0%,#3749be_50%,#a2aeff_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md dark:bg-[#070e41] bg-[#ffffff] px-5 py-0 text-sm font-medium dark:text-gray-50 text-black backdrop-blur-3xl">
                  <span className="text-sm font-medium dark:text-gray-200">
                    Sign In
                  </span>
                </span>
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

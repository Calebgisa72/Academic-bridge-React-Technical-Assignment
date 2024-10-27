import React, { useEffect, useState } from "react";
import searchIcon from "/search.svg";
import { Bell, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="flex py-[14px] px-5 bg-card dark:bg-card-dark">
      <div className="w-[300px] bg-background dark:bg-background-dark h-[36x] flex px-[4px] overflow-hidden rounded-[8px]">
        <input
          type="text"
          placeholder="Search"
          className="w-[90%] bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark h-full outline-none py-2 pr-[8px]
         pl-[6px]"
        />
        <img className="w-[20px] cursor-pointer" src={searchIcon} />
      </div>

      <div className="flex gap-3 ml-auto">
        <div
          onClick={handleTheme}
          className="py-1 px-2 flex items-center bg-background dark:bg-background-dark rounded-[8px]"
        >
          {theme === "light" ? (
            <Moon
              className="text-description w-[21px] cursor-pointer"
              strokeWidth={1.7}
            />
          ) : (
            <Sun
              className="text-description w-[21px] cursor-pointer"
              strokeWidth={1.7}
            />
          )}
        </div>
        <div className="py-1 px-2 flex items-center bg-background dark:bg-background-dark rounded-[8px]">
          <div className="relative">
            <Bell
              className="text-description w-[21px] cursor-pointer"
              strokeWidth={1.7}
            />
            <div className="absolute w-2 h-2 rounded-full bg-red-600 top-[1px] right-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

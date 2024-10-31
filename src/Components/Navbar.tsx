import React, { useEffect, useState } from 'react';
import { Bell, Moon, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { setRightSidebar, setviewMenuBar, setSearch } from '../Redux/Reducers/appReducer';
import { IoMenu } from 'react-icons/io5';
import { RiSearch2Line } from 'react-icons/ri';

const Navbar = () => {
  const { rightSidebar, viewMenuBar } = useSelector((state: RootState) => state.app);
  const [serchItem, setSerchItem] = useState<string>('');
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <div data-testid="navbar" className="flex py-[14px] gap-2 px-5 bg-card dark:bg-card-dark">
      <div
        onClick={() => dispatch(setviewMenuBar(!viewMenuBar))}
        data-testid="menu-icon"
        className="sm:py-1 flex sz:hidden py-[2px] px-1 sm:px-2 cursor-pointer items-center bg-background dark:bg-background-dark rounded-[8px]"
      >
        <IoMenu size={25} className="text-description" />
      </div>
      <div
        data-testid="search-bar"
        className="w-[300px] bg-background dark:bg-background-dark h-[36x] flex px-[4px] overflow-hidden rounded-[8px]"
      >
        <input
          type="text"
          placeholder="Search"
          value={serchItem}
          onChange={(e) => setSerchItem(e.target.value)}
          className="w-[90%] bg-background dark:bg-background-dark h-full outline-none py-2 pr-[8px] pl-[6px]"
          data-testid="search-input"
        />
        <div className="h-full flex items-center justify-center">
          <RiSearch2Line
            onClick={() => {
              if (!serchItem.trim()) return;
              dispatch(setSearch(serchItem));
              setSerchItem('');
            }}
            size={21}
            className="text-description hover:text-primary cursor-pointer"
            data-testid="search-icon"
          />
        </div>
      </div>

      <div className="flex gap-2 sm:gap-3 sm:ml-auto">
        <div
          onClick={handleTheme}
          data-testid="theme-toggle"
          className="sm:py-1 py-[2px] px-1 sm:px-2 flex items-center bg-background dark:bg-background-dark rounded-[8px]"
        >
          {theme === 'light' ? (
            <Moon className="text-description w-[21px] cursor-pointer" strokeWidth={1.7} />
          ) : (
            <Sun className="text-description w-[21px] cursor-pointer" strokeWidth={1.7} />
          )}
        </div>
        <div
          data-testid="notification-icon"
          className="sm:py-1 py-[2px] px-1 sm:px-2 flex items-center bg-background dark:bg-background-dark rounded-[8px]"
        >
          <div className="relative">
            <Bell className="text-description w-[21px] cursor-pointer" strokeWidth={1.7} />
            <div className="absolute w-2 h-2 rounded-full bg-red-600 top-[1px] right-[1px]"></div>
          </div>
        </div>
        <div
          data-testid="right-sidebar-toggle"
          className="sm:py-1 py-[2px] px-1 sm:px-2 cursor-pointer flex items-center bg-background dark:bg-background-dark rounded-[8px]"
        >
          <div title="Project Overview" onClick={() => dispatch(setRightSidebar(!rightSidebar))}>
            {rightSidebar ? (
              <FaArrowCircleRight size={20} className="text-description" />
            ) : (
              <FaArrowCircleLeft size={20} className="text-description" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

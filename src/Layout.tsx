import React from "react";
import Router from "./Routes/Router";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import RightSidebar from "./Components/RightSidebar";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";

const Layout = () => {
  const { rightSidebar, viewMenuBar } = useSelector(
    (state: RootState) => state.app
  );
  return (
    <div className="flex bg-background h-screen" data-testid="layout-component">
      {(viewMenuBar || window.innerWidth > 600) && (
        <div
          className={`${
            window.innerWidth < 600 &&
            "fixed inset-0 top-[67px] z-30 flex bg-black bg-opacity-70 transition-opacity duration-300 ease-out"
          }`}
        >
          <Sidebar />
        </div>
      )}
      <main className="w-full flex flex-col bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
        <Navbar />
        <Router />
      </main>
      {rightSidebar && (
        <div
          className={`${
            window.innerWidth < 600
              ? "fixed inset-0 top-[67px] z-20 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-out"
              : '"w-[450px] h-full bg-card dark:bg-card-dark "'
          }`}
        >
          <RightSidebar />
        </div>
      )}
    </div>
  );
};

export default Layout;

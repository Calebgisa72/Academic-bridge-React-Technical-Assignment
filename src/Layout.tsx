import React from "react";
import Router from "./Routes/Router";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import RightSidebar from "./Components/RightSidebar";

const Layout = () => {
  return (
    <div className="flex bg-background" data-testid="layout-component">
      <Sidebar />
      <main className="w-full flex flex-col bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark">
        <Navbar />
        <Router />
      </main>
      <RightSidebar />
    </div>
  );
};

export default Layout;

import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageTitle from "../Pages/PageTitle";
import NotFound from "./NotFound";
import ComingSoon from "../Pages/ComingSoon";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Task" />
            <ComingSoon page="Home" />
          </>
        }
      ></Route>
      <Route
        path="/home"
        element={
          <>
            <PageTitle title="Home" />
            <ComingSoon page="Home" />
          </>
        }
      ></Route>
      <Route
        path="/messages"
        element={
          <>
            <PageTitle title="Messages" />
            <ComingSoon page="Messages" />
          </>
        }
      ></Route>
      <Route
        path="/notes"
        element={
          <>
            <PageTitle title="Notes" />
            <ComingSoon page="Notes" />
          </>
        }
      ></Route>
      <Route
        path="/performance"
        element={
          <>
            <PageTitle title="Performance" />
            <ComingSoon page="Performance" />
          </>
        }
      ></Route>
      <Route
        path="/settings"
        element={
          <>
            <PageTitle title="Settings" />
            <ComingSoon page="Settings" />
          </>
        }
      ></Route>
      <Route
        path="/profile"
        element={
          <>
            <PageTitle title="Profile" />
            <ComingSoon page="Profile" />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default Router;

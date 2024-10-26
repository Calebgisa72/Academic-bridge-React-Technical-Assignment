import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import NotFound from "./NotFound";
import ComingSoon from "../Components/ComingSoon";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Task" />
            <ComingSoon page="Home"/>
          </>
        }
      ></Route>
    </Routes>
  );
};

export default Router;

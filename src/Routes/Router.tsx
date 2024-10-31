import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageTitle from '../Pages/PageTitle';
import NotFound from './NotFound';
import ComingSoon from '../Pages/ComingSoon';
import Todo from '../Pages/Todo';

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Todo" />
            <Todo />
          </>
        }
      ></Route>
      <Route
        path="/*"
        element={
          <>
            <NotFound />
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

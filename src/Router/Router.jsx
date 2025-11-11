import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home/Home";
import Root from "../Root/Root";
import AddTransaction from "../Layout/AddTransaction/AddTransaction";
import MyProfile from "../Layout/MyProfile/MyProfile";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Loader from "../Component/Loader/Loader";
import Error from "../Component/Error/Error";
import MyTransaction from "../Layout/MyTransaction/MyTransaction";
import Report from "../Layout/Report/Report";
import PrivateRoute from "../Provider/PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addTransaction",
        element: (
          <PrivateRoute>
            <AddTransaction></AddTransaction>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTransaction",
        element: (
          <PrivateRoute>
            <MyTransaction></MyTransaction>
          </PrivateRoute>
        ),
      },
      {
        path: "/reports",
        element: (
          <PrivateRoute>
            <Report></Report>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default Router;

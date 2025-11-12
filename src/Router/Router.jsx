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
import TransactionDetails from "../Component/TransactionDetails/TransactionDetails";
import Policy from "../Layout/Policy";
import Terms from "../Layout/Terms";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
      },
      {
        path: "/addTransaction",
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <AddTransaction></AddTransaction>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTransaction",
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <MyTransaction></MyTransaction>
          </PrivateRoute>
        ),
      },
      {
        path: "/transactionDetails/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/transactionDetails/${params.id}`),
        element: (
          <PrivateRoute>
            <TransactionDetails></TransactionDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/reports",
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <Report></Report>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        hydrateFallbackElement: <Loader></Loader>,
        Component: Login,
      },
      {
        path: "/register",
        hydrateFallbackElement: <Loader></Loader>,
        Component: Register,
      },
      {
        path: "/policy",
        hydrateFallbackElement: <Loader></Loader>,
        Component: Policy,
      },
      {
        path: "/terms",
        hydrateFallbackElement: <Loader></Loader>,
        Component: Terms,
      },
    ],
  },
]);

export default Router;

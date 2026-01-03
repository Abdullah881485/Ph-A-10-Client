import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Loader from "../Component/Loader/Loader";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Header></Header>
      <main>{state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}</main>
      <Footer></Footer>
    </div>
  );
};

export default Root;

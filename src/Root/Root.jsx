// import React, { useState, useEffect } from "react";
// import { Outlet, useLocation } from "react-router";
// import Header from "../Component/Header/Header";
// import Footer from "../Component/Footer/Footer";
// import Loader from "../Component/Loader/Loader";

// const Root = () => {
//   const location = useLocation();
//   const [loading, setLoading] = useState(true); // Start with loader

//   useEffect(() => {
//     // Show loader whenever location changes
//     setLoading(true);

//     // Small delay to simulate page loading
//     const timer = setTimeout(() => setLoading(false), 500);

//     return () => clearTimeout(timer);
//   }, [location]);

//   return (
//     <div className="flex flex-col min-h-screen bg-[#0b1422]">
//       <Header />
//       <main className="grow flex items-center justify-center">
//         {loading ? <Loader /> : <Outlet />}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Root;

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

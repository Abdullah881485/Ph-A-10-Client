import React from "react";

import "./Loader.css";

const Loader = () => {
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div aria-live="assertive" role="alert" className="loader"></div>
    </div>
  );
};

export default Loader;

import React from "react";
import ResponsiveDrawer from "../layout/header";
import Footer from "../layout/footer/Footer";

function MainLayOut({ children }) {
  return (
    <div>
      <ResponsiveDrawer />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayOut;

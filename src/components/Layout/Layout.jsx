import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TBar from "./Tbar";

function Layout({ children }) {
  return (
    <div className="font-topaz overflow-y-visible">
      <TBar />
      <Header />
      {children}
            <Footer />
    </div>
  );
}

export default Layout;

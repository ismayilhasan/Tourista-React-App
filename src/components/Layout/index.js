import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import JoinusSection from "../JoinusSection";
import GoDestinations from "../GoDestinations";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <GoDestinations/>
      <JoinusSection/>
      <Footer />
    </>
  );
}

export default Layout;

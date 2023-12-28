import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

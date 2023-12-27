import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
// import React from "react";

const Layout = () => {
  return (
    <>
      <Header></Header>
      {/* <Main></Main> */}
      <Footer></Footer>
    </>
  );
};

// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   );
// };

export default Layout;

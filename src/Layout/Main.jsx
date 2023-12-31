import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavCon from "../components/NavCon/NavCon";
import './Main.css'; // Import your CSS file

const Main = () => {
  const { pathname } = useLocation();
  const nav = () => {
    if (pathname === "/contact") {
      return <NavCon />;
    } else {
      return <Header />;
    }
  };

  return (
    <>
      {nav()}
      <div className="w-11/12 2xl:w-10/12  mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;

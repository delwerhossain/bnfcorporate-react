import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavCon from "../components/NavCon/NavCon";

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
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;

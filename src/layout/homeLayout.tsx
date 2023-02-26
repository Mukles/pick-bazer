import { Outlet } from "react-router-dom";
import Fotter from "../Components/fotter";
import Header from "../Components/header/header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
    </>
  );
};

export default HomeLayout;

import { Outlet } from "react-router-dom";
import Header from "../Components/header/header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HomeLayout;

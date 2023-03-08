import { Outlet } from "react-router-dom";
import Fotter from "../Components/fotter";
import Header from "../Components/header/header";
interface Props {
  setOpen: any;
}

const HomeLayout = ({ setOpen }: Props) => {
  return (
    <>
      <Header setOpen={setOpen} />
      <Outlet />
      <Fotter />
    </>
  );
};

export default HomeLayout;

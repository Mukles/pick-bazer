import {
  ChevronDownIcon,
  HeartIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useViewportScroll } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { navs } from "../../data/home/navs";
import CustomeSelect from "../../helpers/custom-select";
import { useWindowSize } from "../../hooks/useWidth";
import CartList from "../cart/cartList";
import Search from "../search";

interface Props {
  setOpen: any;
}

const DropDown = () => {
  return (
    <ul className="top-menu">
      <li>
        <a href="tel:+4733378901">
          <PhoneIcon />
          <span>CALL +47 333 78 901</span>
        </a>
      </li>
      <li>
        <a href="/">
          <HeartIcon />
          <span>MY WISHLIST ( 0 )</span>
        </a>
      </li>
      <li>
        <Link to={"/about"}>About us</Link>
      </li>
      <li>
        <Link to={"/about"}>Contact us</Link>
      </li>
      <li>
        <Link to={"/login"}>
          <UserIcon />
          <span>Login</span>
        </Link>
      </li>
    </ul>
  );
};

const TopHeader = () => {
  const { width } = useWindowSize();

  return (
    <div className="top-header">
      <div className="header-left">
        <CustomeSelect>
          <li>Usd</li>
          <li>Eur</li>
        </CustomeSelect>
        <CustomeSelect>
          <li>Usd</li>
          <li>Eur</li>
        </CustomeSelect>
      </div>

      <div className="header-right">
        {width > 991 ? (
          <DropDown />
        ) : (
          <ul>
            <li>
              <a href="/">
                <span>Links</span>
                <ChevronDownIcon />
              </a>

              <DropDown />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

const Header = ({ setOpen }: Props) => {
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();

  const [isFixied, setFixied] = useState(false);
  const onClose = () => {
    setOpen((open: boolean) => !open);
  };

  scrollY.onChange((y) => {
    y > 250 ? setFixied(true) : setFixied(false);
  });

  return (
    <header>
      <div className="container">
        <TopHeader />
      </div>

      <div className={`main-header-wrapper ${isFixied ? "fixed" : ""}`}>
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <button onClick={onClose} type="button" className="nav-toggler">
                <i className="fa fa-bars nav-toggler-icon"></i>
              </button>
              <Link to={"/"}>
                <img src={logo} alt="brand-logo" />
              </Link>
              <ul>
                {navs.map((nav) => (
                  <li key={nav.id}>
                    <Link to={nav.link}>
                      <span>{nav.text}</span>
                      {false && <ChevronDownIcon />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header-right">
              <ul>
                <li className="search-wrapper">
                  <Search />
                </li>
                <li className="cart-dropdown">
                  <button onClick={() => navigate("/shop/cart")}>
                    <ShoppingCartIcon />
                    <span className="cart-count">0</span>
                  </button>
                  <CartList />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

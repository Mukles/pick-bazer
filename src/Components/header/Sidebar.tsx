import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocalLinks from "../../helpers/socail-links";

interface Props {
  setOpen: any;
}

const Sidebar = ({ setOpen }: Props) => {
  const onClose = () => setOpen(false);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mobile-overlay"
        onClick={onClose}
      ></motion.div>

      <button onClick={onClose} type="button" className="close">
        <XMarkIcon />
      </button>
      <div className="search">
        <input type={"search"} name="search" />
        <button type="submit">
          <MagnifyingGlassIcon />
        </button>
      </div>
      <ul className="mobile-menu">
        <li>
          <Link to={"/"}>Home</Link>
          <button>
            <ChevronDownIcon />
          </button>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
          <button>
            <ChevronDownIcon />
          </button>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
          <button>
            <ChevronDownIcon />
          </button>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
          <button>
            <ChevronDownIcon />
          </button>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
          <button>
            <ChevronDownIcon />
          </button>
        </li>
      </ul>

      <SocalLinks />
    </div>
  );
};

export default Sidebar;

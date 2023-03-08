import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface Props {
  setOpen: any;
}

const Sidebar = ({ setOpen }: Props) => {
  const onClose = () => setOpen(false);

  return (
    <div>
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

      <ul className="socal-links">
        <li>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/mukles.116476"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/mukles.116476"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/mukles.116476"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/mukles.116476"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProductNavbar = () => {
  return (
    <div className="page-nav-container">
      <div className="container">
        <ul>
          <li>
            <Link to={"/"}>
              <span>Home</span>
              <ChevronRightIcon />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>Shop</span>
              <ChevronRightIcon />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>List</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductNavbar;

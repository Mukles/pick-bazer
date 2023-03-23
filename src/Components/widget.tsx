import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget-title">
        <button type="button" className="widget-button">
          <h4>Category</h4>
          <ChevronDownIcon />
        </button>
      </div>

      <ul className="widget-body">
        <li className="filter-item">
          <Link to={"/"}>Furniture</Link>
          <span className="item-count">8</span>
        </li>
        <li className="filter-item">
          <Link to={"/"}>Furniture</Link>
          <span className="item-count">8</span>
        </li>
        <li className="filter-item">
          <Link to={"/"}>Furniture</Link>
          <span className="item-count">8</span>
        </li>
        <li className="filter-item">
          <Link to={"/"}>Furniture</Link>
          <span className="item-count">8</span>
        </li>
      </ul>
    </div>
  );
};

export default Widget;

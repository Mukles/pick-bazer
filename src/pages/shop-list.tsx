import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  DefaultGrid,
  FourByTwo,
  ThreeByTwo,
  TwoByTwo,
} from "../Components/icons/GridIcons";
import Product from "../Components/product";

const ShopList = () => {
  return (
    <section>
      <div className="page-header">
        <div className="container">
          <div className="page-title">
            <h1>List</h1>
            <h3>Shop</h3>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="page-nav-container">
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

      <div className="container">
        <div className="shop-products">
          <aside>
            <div className="widget">
              <p>Filters</p>
              <p>Clean All</p>
            </div>

            <div className="widget-collapsible">
              <button type="button" className="widget-button">
                <h4>Category</h4>
                <ChevronDownIcon />
              </button>

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

            <div className="widget-collapsible">
              <button type="button" className="widget-button">
                <h4>Category</h4>
                <ChevronDownIcon />
              </button>

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

            <div className="widget-collapsible">
              <button type="button" className="widget-button">
                <h4>Category</h4>
                <ChevronDownIcon />
              </button>

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
          </aside>
          <main>
            <div className="tollbox">
              <div className="tollbox-left">
                Showing <span>5 of 35</span> Products
              </div>
              <div className="tollbox-right">
                <div className="tollbox-sort">
                  <label>Sort by:</label>
                  <select>
                    <option>Default</option>
                    <option>Most Popular</option>
                  </select>
                </div>
                <div className="tollbox-layout">
                  <button className="active">
                    <DefaultGrid />
                  </button>
                  <button>
                    <TwoByTwo />
                  </button>
                  <button>
                    <ThreeByTwo />
                  </button>
                  <button>
                    <FourByTwo />
                  </button>
                </div>
              </div>
            </div>
            <div className="product-list-container">
              <Product className={"product-list"} />
              <Product className={"product-list"} />
              <Product className={"product-list"} />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ShopList;

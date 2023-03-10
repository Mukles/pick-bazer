import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DefaultGrid,
  FourByTwo,
  ThreeByTwo,
  TwoByTwo,
} from "../Components/icons/GridIcons";
import Product from "../Components/product";

const GridSystem = [
  {
    width: "100%",
    id: 1,
    type: "default",
    icon: <DefaultGrid />,
  },
  {
    id: 2,
    width: "50%",
    type: "two",
    icon: <TwoByTwo />,
  },
  {
    id: 3,
    width: "33.333%",
    type: "three",
    icon: <ThreeByTwo />,
  },
  {
    id: 4,
    width: "25%",
    type: "four",
    icon: <FourByTwo />,
  },
];

const ShopList = () => {
  const [grid, setGrid] = useState(GridSystem[0]);

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
                  {GridSystem.map((item) => (
                    <button
                      onClick={() => setGrid(item)}
                      key={item.id}
                      className={`${item.type === grid.type ? "active" : ""}`}
                    >
                      {item.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`product-list-container ${grid.type} ${
                grid.type !== "default" ? "wrap" : ""
              }`}
            >
              <Product
                width={grid.width}
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                width={grid.width}
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                width={grid.width}
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                width={grid.width}
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                width={grid.width}
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
              <Product
                width={grid.width}
                className={grid.type === "default" ? "product-list" : "wrap"}
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ShopList;

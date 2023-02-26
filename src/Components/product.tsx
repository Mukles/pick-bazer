import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import product1 from "../assets/img/uploads/product-1.jpg";

const Product = () => {
  return (
    <div>
      <div className="proudct">
        <figure className="product-media">
          <span className="product-label">New</span>
          <Link to={"/"}>
            <img src={product1} alt="product" />
          </Link>

          <div className="product-vertical-action">
            <Link className="btn-wishlist" to={"/"}>
              <span>add to wishlist</span>
              <span className="icon">
                <HeartIcon />
              </span>
            </Link>

            <Link className="btn-quickreview" to={"/"}>
              <span>quick view</span>
              <span className="icon">
                <HeartIcon />
              </span>
            </Link>
          </div>
        </figure>

        <div className="product-body">
          <div className="product-catagory">
            <Link to={"/"}>Furniture</Link>
          </div>
          <div className="product-title">
            <Link to={"/"}>2-Seater</Link>
          </div>
          <div className="product-price">$258</div>
          <div className="ratings-container">
            <div className="ratings">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  <StarIcon />
                </span>
              ))}
            </div>
            <div className="ratings-text">(2 Reviews)</div>
          </div>
        </div>

        <div className="product-action">
          <Link to={"/"}>
            <span>select options</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

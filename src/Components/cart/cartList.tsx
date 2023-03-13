import { ArrowLongRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import productImg from "../../assets/img/uploads/product-1.jpg";

const CartList = () => {
  const navigate = useNavigate();

  return (
    <div className="cartlist-wrapper">
      <ul className="dropdown-cart-list">
        <li>
          <div>
            <Link to={"/"} className="product-name">
              Block Side Table/Trolley - Green, Medium
            </Link>
            <div className="cart-price"> 7 X $210 </div>
          </div>
          <figure>
            <Link to={"/"}>
              <img src={productImg} alt="product" />
            </Link>
          </figure>
          <button type="button" className="cart-remove">
            <XMarkIcon />
          </button>
        </li>
        <li>
          <div>
            <Link to={"/"} className="product-name">
              Block Side Table/Trolley - Green, Medium
            </Link>
            <div className="cart-price"> 7 X $210 </div>
          </div>
          <figure>
            <Link to={"/"}>
              <img src={productImg} alt="product" />
            </Link>
          </figure>
          <button type="button" className="cart-remove">
            <XMarkIcon />
          </button>
        </li>
        <li>
          <div>
            <Link to={"/"} className="product-name">
              Block Side Table/Trolley - Green, Medium
            </Link>
            <div className="cart-price"> 7 X $210 </div>
          </div>
          <figure>
            <Link to={"/"}>
              <img src={productImg} alt="product" />
            </Link>
          </figure>
          <button type="button" className="cart-remove">
            <XMarkIcon />
          </button>
        </li>
      </ul>

      <div className="cart-total">
        <h4>total</h4>
        <h4>$1,490.00</h4>
      </div>

      <div className="cart-buttons">
        <button type="button" onClick={() => navigate("/shop/cart")}>
          View Cart
        </button>
        <button type="button">
          <span> Checkout</span>
          <ArrowLongRightIcon />
        </button>
      </div>
    </div>
  );
};

export default CartList;

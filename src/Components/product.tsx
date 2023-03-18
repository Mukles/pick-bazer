import { HeartIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import product1 from "../assets/img/uploads/product-1.jpg";
import QuickPreview from "./product/quic-preview";

interface Props {
  className?: string;
}

const Product = ({ className }: Props) => {
  const [quickreview, setQuickReview] = useState(false);
  const onChangeReview = () => setQuickReview((quickreview) => !quickreview);

  return (
    <>
      {quickreview &&
        ReactDOM.createPortal(
          <QuickPreview onClose={onChangeReview} />,
          document.querySelector(".modal") as HTMLDivElement
        )}
      <div>
        <div className={`product ${className}`}>
          <figure className="product-media">
            <span className="product-label">New</span>
            <Link to={"/"}>
              <img src={product1} alt="product" />
            </Link>

            {className?.includes("wrap") && (
              <div className="product-action">
                <Link to={"/"}>
                  <ListBulletIcon />
                  <span>select options</span>
                </Link>
              </div>
            )}

            {!className?.includes("product-list") && (
              <div className="product-vertical-action">
                <Link className="btn-wishlist" to={"/"}>
                  <span>add to wishlist</span>
                  <span className="icon">
                    <HeartIcon />
                  </span>
                </Link>

                <Link
                  onClick={onChangeReview}
                  className="btn-quickreview"
                  to={"/"}
                >
                  <span>quick view</span>
                  <span className="icon">
                    <HeartIcon />
                  </span>
                </Link>
              </div>
            )}
          </figure>

          <div className="product-body">
            {className?.includes("product-list") ? (
              <>
                <div className="product-category">
                  <Link to={"/"}>Women</Link>
                </div>
                <div className="product-title">
                  <Link to={"/"}>Beige metal hoop tote bag</Link>
                </div>
                <div className="product-content">
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing. Sed lectus.
                  </p>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          {className?.includes("product-list") ? (
            <div className="product-list-action">
              <div className="product-price">$75.00–$80.00</div>
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

              <div className="product-action">
                <button>
                  <HeartIcon />
                  <span>quick review</span>
                </button>
                <button>
                  <HeartIcon />
                  <span>wishlist</span>
                </button>
              </div>

              <div className="product-action">
                <Link to={"/"}>
                  <ListBulletIcon />
                  <span>select options</span>
                </Link>
              </div>
            </div>
          ) : (
            !className?.includes("wrap") && (
              <div className="product-action">
                <Link to={"/"}>
                  <ListBulletIcon />
                  <span>select options</span>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Product;

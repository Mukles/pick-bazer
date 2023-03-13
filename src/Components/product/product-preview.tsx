import {
  HeartIcon,
  ShoppingCartIcon,
  StarIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import SocalLinks from "../../helpers/socail-links";

const ProductPreview = () => {
  return (
    <section>
      <div className="container">
        <div className="product-details-top">
          <div className="product-gallery-container">
            <div className="product-gallery">
              <figure className="product-main-img">
                <img
                  src="https://d-themes.com/react_asset_api/molla/uploads/product_1_1_45e247fd69.jpg"
                  alt=""
                />
              </figure>
            </div>
            <ul className="product-zoom-gallery">
              <li>
                <button>
                  <img
                    src="https://d-themes.com/react_asset_api/molla/uploads/product_1_1_45e247fd69.jpg"
                    alt=""
                  />
                </button>
              </li>
              <li>
                <button>
                  <img
                    src="https://d-themes.com/react_asset_api/molla/uploads/product_1_1_45e247fd69.jpg"
                    alt=""
                  />
                </button>
              </li>
              <li>
                <button>
                  <img
                    src="https://d-themes.com/react_asset_api/molla/uploads/product_1_1_45e247fd69.jpg"
                    alt=""
                  />
                </button>
              </li>
              <li>
                <button>
                  <img
                    src="https://d-themes.com/react_asset_api/molla/uploads/product_1_1_45e247fd69.jpg"
                    alt=""
                  />
                </button>
              </li>
            </ul>
          </div>
          <div className="entry-summary">
            <div className="product-details">
              <div className="product-title">Beige metal hoop tote bag</div>
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
              <div className="product-price">$258 - $300</div>
              <div className="product-content">
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing. Sed lectus.
                </p>
              </div>
              <div className="product-colors">
                <label>Color: </label>
                <ul className="colors-pill">
                  <li>
                    <button
                      className="active"
                      type="button"
                      style={{ background: "rgb(51, 51, 51)" }}
                    ></button>
                  </li>
                  <li>
                    <button
                      type="button"
                      style={{ background: "rgb(51, 51, 51)" }}
                    ></button>
                  </li>
                  <li>
                    <button
                      type="button"
                      style={{ background: "rgb(51, 51, 51)" }}
                    ></button>
                  </li>
                  <li>
                    <button
                      type="button"
                      style={{ background: "rgb(51, 51, 51)" }}
                    ></button>
                  </li>
                </ul>
              </div>

              <div className="product-size-fitler">
                <div className="select-size">
                  <label>Size: </label>
                  <select>
                    <option>Select a size</option>
                    <option>Select a size</option>
                  </select>
                </div>
                <div className="size-guide">
                  <button>
                    <TableCellsIcon />
                    <span>size guide</span>
                  </button>
                </div>
              </div>
              <div className="product-size-fitler">
                <label>Qty: </label>
                <input type={"number"} min={1} />
              </div>
              <div className="product-list-action">
                <div className="product-action">
                  <button>
                    <ShoppingCartIcon />
                    <span>Add to cart</span>
                  </button>
                </div>
                <div>
                  <button className="add-whishlist">
                    <HeartIcon /> <span>Go to wishlist</span>
                  </button>
                </div>
              </div>
              <div className="product-details-fotter">
                <div className="product-catagory">
                  <span>Category: </span>
                  <span>Woman</span>
                </div>
                <div className="product-size-fitler">
                  <label>Share: </label>
                  <SocalLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;

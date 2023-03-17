import {
  HeartIcon,
  ShoppingCartIcon,
  StarIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { useGesture } from "@use-gesture/react";
import { useRef, useState } from "react";
import SocalLinks from "../../helpers/socail-links";
import ProductMoreDetails from "./porduct-more-details";
import ProductSuggestion from "./product-suggestion";

const ProductPreview = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const imgContainer = useRef<HTMLElement>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0, scale: 1 });

  useGesture(
    {
      onDrag: ({ movement: [dx, dy] }) =>
        setCrop((crop) => ({ ...crop, x: dx, y: dy })),
      onPinch: ({ offset: [d] }) =>
        setCrop((crop) => ({ ...crop, scale: 1 + d / 50 })),
      onDragEnd: () => {
        if (!imageRef.current || !imgContainer.current) return null;
        let newCrop = crop;
        let imageBounds = imageRef.current.getBoundingClientRect();
        let containerBounds = imgContainer.current.getBoundingClientRect();

        if (imageBounds.left > containerBounds.left) {
          newCrop.x = 0;
        } else if (imageBounds.right < containerBounds.right) {
          newCrop.x = -(imageBounds.width - containerBounds.width);
        }

        if (imageBounds.top > containerBounds.top) {
          newCrop.y = 0;
        } else if (imageBounds.bottom < containerBounds.bottom) {
          newCrop.y = -(imageBounds.height - containerBounds.height);
        }
        setCrop({ ...newCrop });
      },
    },

    {
      drag: {},
      target: imageRef,
      eventOptions: { passive: false },
    }
  );
  return (
    <>
      <section>
        <div className="container">
          <div className="product-details-top">
            <div className="product-gallery-container">
              <div className="product-gallery">
                <figure ref={imgContainer} className="product-main-img">
                  <span className="product-label">Top</span>
                  <img
                    style={{
                      left: crop.x,
                      top: crop.y,
                      transform: `scale(${crop.scale})`,
                    }}
                    ref={imageRef}
                    src="https://d-themes.com/react_asset_api/molla/uploads/product_1_1_45e247fd69.jpg"
                    alt=""
                  />
                </figure>
              </div>
              <ul className="product-zoom-gallery">
                <li>
                  <button className="active">
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
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus libero,
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
      <ProductMoreDetails />
      <ProductSuggestion />
    </>
  );
};

export default ProductPreview;

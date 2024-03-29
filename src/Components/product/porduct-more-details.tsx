import { tabs } from "../../data/home/tabs";
import TabPills from "../../helpers/tab-pills";

const ProductMoreDetails = () => {
  return (
    <section className="product-tabs-container">
      <div className="container">
        <div>
          <TabPills tabsList={tabs} className="product-tabs" />

          <div className="product-tab-content">
            <div className="product-desc-content">
              <h3>Product Information</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna viverra non, semper suscipit, posuere
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
                Donec consectetuer ligula vulputate sem tristique cursus.{" "}
              </p>
              <ul>
                <li>
                  Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                  elit.
                </li>
                <li>Vivamus finibus vel mauris ut vehicula.</li>
                <li>
                  Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna viverra non, semper suscipit, posuere
                a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis. Phasellus ultrices nulla quis nibh. Quisque a lectus.
                Donec consectetuer ligula vulputate sem tristique cursus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMoreDetails;

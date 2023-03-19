import { tabs } from "../../data/home/tabs";
import TabPills from "../../helpers/tab-pills";
import Product from "../product";

const RecentProduct = () => {
  return (
    <section>
      <div className="container">
        <div className="recent-product-collention">
          <h2 className="section-title">Recent Arrivals</h2>
          <TabPills tabsList={tabs} />
          <div className="product-container">
            {[...Array(10)].map((item, i) => (
              <Product key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProduct;

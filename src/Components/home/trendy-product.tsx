import { tabs } from "../../data/home/tabs";
import Product from "../product";

const TrendyProduct = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="trendy-collention">
          <h2 className="section-title">Trendy Products</h2>
          <ul className="tabs">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button type="button">{tab.text}</button>
              </li>
            ))}
          </ul>

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

export default TrendyProduct;

import TabPills from "../../helpers/tab-pills";
import Product from "../product";

const TrendyProduct = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="trendy-collention">
          <h2 className="section-title">Trendy Products</h2>
          <TabPills />
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

import { motion } from "framer-motion";
import { tabs } from "../../data/home/tabs";
import TabPills from "../../helpers/tab-pills";
import Product from "../product";

const TrendyProduct = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="trendy-collention">
          <h2 className="section-title">Trendy Products</h2>
          <TabPills tabsList={tabs} />
          <motion.div
            drag="x"
            dragConstraints={{ right: 0 }}
            className="product-container trendy"
          >
            {[...Array(8)].map((item, i) => (
              <Product key={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrendyProduct;

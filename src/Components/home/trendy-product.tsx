import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { tabs } from "../../data/home/tabs";
import TabPills from "../../helpers/tab-pills";
import { useBoulet } from "../../hooks/useBolute";
import { useDragConstraints } from "../../hooks/useDragConstraints";
import Product from "../product";

const TrendyProduct = () => {
  const produtLength = 12;
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  let width = useDragConstraints({ target: containerRef });
  const sizeOfbulet = Math.ceil(produtLength / useBoulet());
  console.log({ width });

  const onBuletClick = (pageNumber: number) => {
    const pertItemWidth = width / 2;
    controls.start({ x: "-50%" });
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div>
          <h2 className="section-title">Trendy Products</h2>
          <TabPills tabsList={tabs} />
          <div ref={containerRef} className="trendy-collention">
            <motion.div
              drag="x"
              animate={controls}
              dragElastic={0.1}
              dragConstraints={{ right: 0, left: -width }}
              className="product-container trendy"
            >
              {[...Array(produtLength)].map((item, i) => (
                <Product key={i} />
              ))}
            </motion.div>
          </div>

          <ul className="bulets">
            {[...Array(sizeOfbulet)].map((_, i) => (
              <li
                onClick={() => onBuletClick(i)}
                key={i}
                className={`${i === 0 ? "active" : ""}`}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrendyProduct;

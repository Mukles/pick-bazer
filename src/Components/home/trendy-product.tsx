import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import { tabs } from "../../data/home/tabs";
import TabPills from "../../helpers/tab-pills";
import { useBoulet } from "../../hooks/useBolute";
import { useDragConstraints } from "../../hooks/useDragConstraints";
import Product from "../product";

const TrendyProduct = () => {
  const produtLength = 10;
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedBulet, setSelectedBulet] = useState(0);
  let width = useDragConstraints({ target: containerRef });
  let itemPerPage = useBoulet();
  const sizeOfbulet = Math.ceil(produtLength / itemPerPage);

  const onBuletClick = (pageNumber: number) => {
    console.log(pageNumber);
    console.log({ width });
    const cardWidth = width / produtLength;
    const x = pageNumber === 0 ? "0%" : "-100%";
    console.log({ x });

    controls.start({ x });
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
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            >
              {[...Array(produtLength)].map((item, i) => (
                <Product i={i + 1} key={i} />
              ))}
            </motion.div>
          </div>

          <ul className="bulets">
            {[...Array(sizeOfbulet)].map((_, i) => (
              <li
                onClick={() => onBuletClick(i)}
                key={i}
                className={`${i === selectedBulet ? "active" : ""}`}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrendyProduct;

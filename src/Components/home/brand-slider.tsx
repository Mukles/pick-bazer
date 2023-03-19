import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import brand1 from "../../assets/img/brands/1.png";
import { useDragConstraints } from "../../hooks/useDragConstraints";

export const BrandSlider = () => {
  const contianerRef = useRef<HTMLDivElement>(null);
  const width = useDragConstraints({ target: contianerRef });

  return (
    <motion.div ref={contianerRef} style={{ overflow: "hidden" }}>
      <motion.div
        drag="x"
        dragElastic={0.1}
        dragConstraints={{ right: 0, left: -width }}
        className="brands"
      >
        {[...Array(10)].map((item, i) => (
          <div className="brand" key={i}>
            <Link to={"/"}>
              <img src={brand1} alt="brand" />
            </Link>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/img/home/slider/slide-1-1.png";
import slide1 from "../assets/img/home/slider/slide-1.png";
import banner2 from "../assets/img/home/slider/slide-2-1.png";
import slide2 from "../assets/img/home/slider/slide-2.png";
import { useDragConstraints } from "../hooks/useDragConstraints";

const sliderItems = [
  {
    title: "Best Lighting, Collection",
    subTitle: "Topsale Collection",
    banner: banner1,
    slide: slide1,
    background: "rgb(194, 151, 99)",
    margin: { marginLeft: "auto" },
  },
  {
    title: "Best Lighting, Collection",
    subTitle: "Topsale Collection",
    banner: banner2,
    slide: slide2,
    background: "rgb(154, 197, 203)",
    margin: { marginLeft: "50%", marginTop: "10%" },
  },
];

const Slider = () => {
  const LEFT_OFFSET = -100;
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  let width = useDragConstraints({ target: containerRef });

  const handlePanEnd = async (event: any, info: PanInfo) => {
    const x = info.offset.x;
    if (x < LEFT_OFFSET && x < 0) {
      await controls.start({
        x: "-50%",
      });
    } else {
      await controls.start({ x: 0 });
    }
  };

  return (
    <div ref={containerRef} className="intro-sliders">
      <motion.div
        drag="x"
        dragElastic={0.1}
        dragMomentum={false}
        dragConstraints={{ right: 0, left: -width }}
        onPanEnd={handlePanEnd}
        animate={controls}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      >
        {sliderItems.map(({ background, slide, banner, margin }, i) => {
          return (
            <div
              key={i}
              className="intro-slide"
              style={{
                background,
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: "-30%" }}
                whileInView={{ opacity: 1, y: "-50%" }}
                transition={{
                  duration: 0.8,
                  type: "tween",
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="intro-content"
              >
                <h3>Topsale Collection</h3>
                <h1>
                  Wood Cabinet <br /> Collection
                </h1>
                <Link to={"/"}>
                  <span>SHOP NOW</span>
                  <ArrowLongRightIcon />
                </Link>
              </motion.div>
              <figure className="slide-img">
                <picture>
                  <img style={margin} src={slide} alt={"slide-1 img"} />
                </picture>
              </figure>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Slider;

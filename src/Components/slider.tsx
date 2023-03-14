import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/img/home/slider/slide-1-1.png";
import slide1 from "../assets/img/home/slider/slide-1.png";
import banner2 from "../assets/img/home/slider/slide-2-1.png";
import slide2 from "../assets/img/home/slider/slide-2.png";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setwidth] = useState(0);

  const resizeHandler = () => {
    if (!containerRef.current?.scrollWidth) return;
    setwidth(containerRef.current.offsetWidth / 2);
  };

  useEffect(() => {
    setwidth((containerRef.current?.offsetWidth as number) / 2);
    window.addEventListener("resize", resizeHandler);
  }, []);

  console.log({ width });

  return (
    <div className="intro-sliders">
      <motion.div
        ref={containerRef}
        drag="x"
        dragMomentum={false}
        dragConstraints={{ right: 0, left: -width }}
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
              <div className="intro-content">
                <h3>Topsale Collection</h3>
                <h1>
                  Wood Cabinet <br /> Collection
                </h1>
                <Link to={"/"}>
                  <span>SHOP NOW</span>
                  <ArrowLongRightIcon />
                </Link>
              </div>
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

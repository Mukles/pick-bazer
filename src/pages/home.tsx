import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import brand1 from "../assets/img/brands/1.png";
import banner1 from "../assets/img/home/banner/intro/banner-1.jpg";
import Blog from "../Components/home/blog";
import Service from "../Components/home/service-list";
import ShopByCatagory from "../Components/home/shop-by-catagory";
import TrendyProduct from "../Components/home/trendy-product";
import Slider from "../Components/slider";

const Home = () => {
  return (
    <>
      <section className="home-page">
        <div className="container">
          <div className="intro-section">
            <div className="intro-slider-contianer">
              <Slider />
              <div className="intro-banner">
                <div className="banner">
                  <img src={banner1} alt="banner" />
                  <div className="banner-content">
                    <h4>Clearence</h4>
                    <h3>
                      <Link to={"/"}>
                        Chairs & Chaises <br /> Up to 40% off
                      </Link>
                    </h3>

                    <Link to={"/"} className="banner-link">
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="banner">
                  <img src={banner1} alt="banner" />
                  <div className="banner-content">
                    <h4>Clearence</h4>
                    <h3>
                      <Link to={"/"}>
                        Chairs & Chaises <br /> Up to 40% off
                      </Link>
                    </h3>

                    <Link to={"/"} className="banner-link">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 300 }}
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
            </div>
          </div>
        </div>
      </section>

      <TrendyProduct />
      <ShopByCatagory />
      <Service />
      <Blog />
    </>
  );
};

export default Home;

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import banner from "../../assets/img/home/banner/banner-1.jpg";
import banner2 from "../../assets/img/home/banner/banner-2.jpg";
import banner3 from "../../assets/img/home/banner/banner-3.jpg";
import banner4 from "../../assets/img/home/banner/banner-4.jpg";

const ShopByCatagory = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Shop by Categories</h2>
        <div className="catagory-container">
          <div>
            <div className="banner-img">
              <Link to={"/"} className="banner-link">
                <h3 className="banner-title">Home Decor</h3>
                <span>
                  Shop now <ArrowLongRightIcon />
                </span>
              </Link>
              <img src={banner} alt="img" />
            </div>
          </div>
          <div>
            <div className="banner-img">
              <Link to={"/"} className="banner-link">
                <h3 className="banner-title">Home Decor</h3>
                <span>
                  Shop now <ArrowLongRightIcon />
                </span>
              </Link>
              <img src={banner2} alt="img" />
            </div>
            <div className="banner-img">
              <Link to={"/"} className="banner-link">
                <h3 className="banner-title">Home Decor</h3>
                <span>
                  Shop now <ArrowLongRightIcon />
                </span>
              </Link>
              <img src={banner3} alt="img" />
            </div>
          </div>
          <div>
            <div className="banner-img">
              <Link to={"/"} className="banner-link">
                <h3 className="banner-title">Home Decor</h3>
                <span>
                  Shop now <ArrowLongRightIcon />
                </span>
              </Link>
              <img src={banner4} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByCatagory;

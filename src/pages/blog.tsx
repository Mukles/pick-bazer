import { Link } from "react-router-dom";
import ProductHeader from "../helpers/product-header";
import ProductNavbar from "../helpers/product-navbar";

const Blog = () => {
  return (
    <section>
      <ProductHeader title={"Blog Classic"} />
      <ProductNavbar />

      <div className="container">
        <div className="bloglist-container">
          <div className="bloglist-left">
            <article className="entry">
              <figure className="entry-media">
                <Link to="/">
                  <img
                    src="https://d-themes.com/react_asset_api/molla/uploads/post_1_b9361c0eac.jpg"
                    alt=""
                  />
                </Link>
              </figure>

              <div className="entry-body">
                <div className="entry-meta">
                  <span>by John Doe</span>
                  <span>by John Doe</span>
                  <span>by John Doe</span>
                </div>

                <div className="entry-title">
                  <Link to={"/"}>Sed adipiscing ornare.</Link>
                </div>
                <div className="entry-cats">
                  in <Link to={"/"}>Lifestyle</Link>
                  <Link to={"/"}>Shopping</Link>
                </div>
                <div className="entry-content">
                  <p>
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo, eget blandit nunc tortor eu nibh ...{" "}
                  </p>

                  <Link to={"/"} className="read-more">
                    Continue Reading
                  </Link>
                </div>
              </div>
            </article>
          </div>
          <div className="bloglist-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

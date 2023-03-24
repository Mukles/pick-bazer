import { Link, Outlet, useParams } from "react-router-dom";
import Widget from "../Components/widget";
import ProductHeader from "../helpers/product-header";
import ProductNavbar from "../helpers/product-navbar";

const BlogLayout = () => {
  const { id } = useParams();
  return (
    <section>
      <ProductHeader
        subTitle={id ? "Single Post" : "Blog"}
        title={id ? "Default With Sidebar" : "Blog Classic"}
      />
      <ProductNavbar />

      <div className="container">
        <div className="bloglist-container">
          <div className="bloglist-left">
            <Outlet />
          </div>
          <div className="bloglist-right">
            <div>
              <form className="widget">
                <h3 className="widget-title">Search</h3>
                <div className="search-wrapper">
                  <input
                    type={"search"}
                    placeholder="Search in blog"
                    name="search"
                  />
                  <button type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
              <Widget />

              <div className="widget">
                <h4 className="widget-title">Popular Posts</h4>
                <ul className="posts-list">
                  <li>
                    <figure>
                      <Link to={"/"}>
                        <img
                          src="https://d-themes.com/react_asset_api/molla/uploads/post_1_b9361c0eac.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div>
                      <span>Nov 22, 2018</span>
                      <h4>
                        <Link to={"/"}>Sed adipiscing ornare..</Link>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <Link to={"/"}>
                        <img
                          src="https://d-themes.com/react_asset_api/molla/uploads/post_1_b9361c0eac.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div>
                      <span>Nov 22, 2018</span>
                      <h4>
                        <Link to={"/"}>Sed adipiscing ornare..</Link>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <Link to={"/"}>
                        <img
                          src="https://d-themes.com/react_asset_api/molla/uploads/post_1_b9361c0eac.jpg"
                          alt=""
                        />
                      </Link>
                    </figure>
                    <div>
                      <span>Nov 22, 2018</span>
                      <h4>
                        <Link to={"/"}>Sed adipiscing ornare..</Link>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="widget widget-banner">
                <Link to={"/"}>
                  <img
                    src="https://d-themes.com/react/molla/demo-2/images/blog/sidebar/banner.jpg"
                    alt=""
                  />
                </Link>

                <div className="banner-content">
                  <p>online & in-store</p>
                  <h3>Spring Sale</h3>
                  <h2>
                    Up to 60% off <br />
                    from $55
                  </h2>
                  <button>Shop Now</button>
                </div>
              </div>

              <div className="widget">
                <div className="widget-title">Browse Tags</div>
                <div className="browser-tags">
                  <Link className="tag" to={"/"}>
                    fashion
                  </Link>
                  <Link className="tag" to={"/"}>
                    style
                  </Link>
                  <Link className="tag" to={"/"}>
                    women
                  </Link>
                  <Link className="tag" to={"/"}>
                    photography
                  </Link>
                  <Link className="tag" to={"/"}>
                    travel
                  </Link>
                </div>
              </div>
              <div className="widget">
                <div className="widget-title">About Blog</div>
                <p>
                  Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                  euismod dui, pulvinar nunc sapien ornare nisl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;

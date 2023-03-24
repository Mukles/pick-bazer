import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import blog1 from "../../assets/img/home/blog/1.jpg";
import { useWindowSize } from "../../hooks/useWidth";

const Blog = () => {
  const { width } = useWindowSize();

  return (
    <section className="blog-section section-padding">
      <div className="container">
        <h2 className="section-title">From Our Blog</h2>
        <div className="blog-container">
          {[...Array(3)].map((item, i) => {
            if (width <= 991 && width >= 600 && i === 2) return null;
            else {
              return (
                <article key={i}>
                  <div className="blog-item">
                    <figure className="entry-media">
                      <Link to={"/blogs/1"}>
                        <img src={blog1} alt="blog-img" />
                      </Link>
                    </figure>

                    <div className="entry-body">
                      <div className="entry-meta">
                        <Link to={"/"}>Sep 22, 2020</Link>
                        {"  "}
                        <Link to={"/"}> 0 Comments</Link>
                      </div>

                      <div className="entry-title">
                        <Link to={"/"}>Sed adipiscing odbrnare.</Link>
                      </div>
                      <div className="entry-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Phasellus hendrerit.Pelletesque aliquet nibh
                          necurna.
                        </p>

                        <Link to={"/blogs/1"} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }
          })}
        </div>
        <Link className="more-container" to="/blogs">
          <span>View more articles</span>
          <ArrowLongRightIcon />
        </Link>
      </div>
    </section>
  );
};

export default Blog;

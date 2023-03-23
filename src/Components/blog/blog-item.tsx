import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
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
          <span>
            by <Link to={"/"}>John Doe</Link>
          </span>
          <div className="meta-separator">|</div>
          <span>
            by <Link to={"/"}>John Doe</Link>
          </span>
          <div className="meta-separator">|</div>
          <span>
            by <Link to={"/"}>John Doe</Link>
          </span>
        </div>

        <div className="entry-title">
          <Link to={"/"}>Sed adipiscing ornare.</Link>
        </div>
        <div className="entry-cats">
          in &nbsp; <Link to={"/"}>Lifestyle</Link>
          &nbsp;&nbsp;
          <Link to={"/"}>Shopping</Link>
        </div>
        <div className="entry-content">
          <p>
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh ...{" "}
          </p>

          <Link to={"/"} className="read-more">
            Continue Reading
            <span>
              <ArrowLongRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;

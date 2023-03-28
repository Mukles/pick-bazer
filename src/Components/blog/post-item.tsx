import { Link } from "react-router-dom";

const PostItem = () => {
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
            <Link to={"/"}>Sep 22, 2020</Link>
          </span>
          <div className="meta-separator">|</div>
          <span>
            <Link to={"/"}>0 Comments</Link>
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
      </div>
    </article>
  );
};

export default PostItem;

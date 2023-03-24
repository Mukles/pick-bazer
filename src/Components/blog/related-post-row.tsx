import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDragConstraints } from "../../hooks/useDragConstraints";

const RealtedPostRow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const width = useDragConstraints({ target: containerRef });
  console.log("jfdlkaj");

  return (
    <div className="related-post-container">
      <h2 className="title">Related Posts</h2>
      <motion.div
        ref={containerRef}
        dragElastic={0.1}
        dragConstraints={{ right: 0, left: -width }}
        drag="x"
      >
        <div className="realted-post-row">
          {[...Array(3)].map((item, i) => (
            <PostItem key={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default RealtedPostRow;

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

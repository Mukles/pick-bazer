import { motion } from "framer-motion";
import { useRef } from "react";
import { useDragConstraints } from "../../hooks/useDragConstraints";
import PostItem from "./post-item";

const RealtedPostRow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let width = useDragConstraints({ target: containerRef });

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

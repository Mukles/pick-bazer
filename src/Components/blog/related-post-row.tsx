const RealtedPostRow = () => {
  return (
    <div className="related-post-container">
      <h2 className="section-title">Related Posts</h2>
      <div className="realted-post-row">
        {Array(3).map((item, i) => (
          <PostItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default RealtedPostRow;

const PostItem = () => {
  return <div className="post-item"></div>;
};

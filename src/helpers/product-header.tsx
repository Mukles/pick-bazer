interface Props {
  title: string;
}

const ProductHeader = ({ title }: Props) => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="page-title">
          <h1>{title}</h1>
          <h3>Shop</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;

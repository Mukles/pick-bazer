import Product from "../product";

const ProductSuggestion = () => {
  return (
    <section>
      <div className="container">
        <div className="product-list-container suggestion-lists wrap">
          <h3>You May Also Like</h3>
          {[...Array(4)].map((item, i) => (
            <Product className="wrap" key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuggestion;

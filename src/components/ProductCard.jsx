import "../styles/product-card.css";

const ProductCard = ({
  image,
  name,
  price,
  description,
  product: { slug },
}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <div className="title">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </div>
        <div className="cta">
          <div className="price">&#8369; {price}</div>
          <button
            onClick={() => {
              console.log(
                `%cBought ${name}`,
                "background:#111; color:#0ff; padding:4px 8px; border-radius:6px; font-weight:bold;"
              );
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

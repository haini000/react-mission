const ProductCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p>{props.brand}</p>
    </div>      
  );
};

export default ProductCard;
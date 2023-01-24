import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { ProductProps } from "./Types.type";

const Product = (props: ProductProps) => {
  const [state, setState] = useState({ inCart: props.inCart }); //to define status of products
  const product = props.product;
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(product));
    setState({ inCart: true });
  };
  return (
    <div>
      <div className="card" id="product-card" key={product.skuId}>
        <div className="card-img">
          <img
            className="product-img"
            src={product.imgUrl}
            alt={product.ProductName}
          ></img>
        </div>
        <hr />
        <h5 className="card-title">
          <strong>{product.ProductName}</strong>
        </h5>
        <div className="card-body">{product.desc}</div>
        <div className="cardPrice">
          <h3>₹ {product.price} /-</h3>
        </div>

        <hr />

        {state.inCart ? (
          <button className="viewBtnSuccess">Added to Cart</button>
        ) : (
          <button className="viewBtn" onClick={add}>
            Add to Cart
          </button>
        )}
      </div>
      <br />
    </div>
  );
};
export default Product;

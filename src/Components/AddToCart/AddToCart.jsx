import { useState } from "react";

//images
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cartIcon from "../../images/icon-cart1.svg";

import "./AddToCart.css";

export default function AddTocart(props) {
  const [quantity, setQuantity] = useState(0);

  const handleClick = () => {
    props.onpass(quantity);
  };

  return (
    <div className="addToCart">
      <div className="addToCart-counter">
        <span
          className="addToCart-updateQuantity"
          onClick={() => setQuantity(quantity - 1)}
        >
          <img src={minus} alt="minus" />
        </span>
        <div className="addToCart-quantityCounter">{quantity}</div>
        <span
          className="addToCart-updateQuantity"
          onClick={() => setQuantity(quantity + 1)}
        >
          <img src={plus} alt="plus" />
        </span>
      </div>
      <button className="addToCart-btn-addCart" onClick={handleClick}>
        <img src={cartIcon} alt="cart Icon" className="addToCart-cartIcon" />
        <span className="addToCart-cartIcon"></span> Add to cart
      </button>
    </div>
  );
}

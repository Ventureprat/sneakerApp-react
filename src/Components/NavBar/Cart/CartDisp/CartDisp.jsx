import { useContext } from "react";
import { navBarData } from "../../../../Pages/Home";

import deleteIcon from "../../../../images/icon-delete.svg";

import "./CartDisp.css";

export default function CartDisp(props) {
  const quantityNavBar = useContext(navBarData);

  if (props.cartDispVisibility && quantityNavBar > 0) {
    return (
      <div className="cartDispContainer">
        <h3 id="cartDispContainer-cartText">Cart</h3>
        <hr className="cartDispContainer-cartHoriLine" />

        <div className="cartDispContainer-totalpriceDisp">
          <div className="cartDispContainer-imageIcon"></div>
          <div className="cartDispContainer-priceDisp">
            <p className="cartDispContainer-textCart">
              Autumn Limited Edition...
            </p>
            <p className="cartDispContainer-amountCart">
              $125.00 x {quantityNavBar}{" "}
              <span className="cartDispContainer-priceAmountBold">
                ${125.0 * quantityNavBar}
              </span>
            </p>
          </div>
          <img
            src={deleteIcon}
            alt="delete Icon"
            className="cartDispContainer-cartDeleteIcon"
          />
        </div>
        <button className="cartDispContainer-cartCheckout">Checkout</button>
      </div>
    );
  } else if (props.cartDispVisibility && quantityNavBar === 0) {
    return (
      <div className="cartDispContainer">
        <h3 id="cartDispContainer-cartText">Cart</h3>
        <hr className="cartDispContainer-cartHoriLine" />
        <h1 className="cartDispContainer-emptyCart">Your cart is empty.</h1>
      </div>
    );
  }
  return null;
}

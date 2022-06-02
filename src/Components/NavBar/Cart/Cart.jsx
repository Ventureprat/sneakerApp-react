import { useState, useContext } from "react";
import CartDisp from "./CartDisp/CartDisp";
import { navBarData } from "../../../Pages/Home";

import "./Cart.css";

export default function Cart() {
  const [visibleCart, setVisibleCart] = useState(false);
  const quantityNavBar = useContext(navBarData);

  return (
    <div className="cartContainer">
      <div
        className="cartContainer-cartImage"
        onClick={() => {
          setVisibleCart(!visibleCart);
        }}
      >
        <div className="cartContainer-quantityShow">{quantityNavBar}</div>
      </div>
      <CartDisp cartDispVisibility={visibleCart} />
    </div>
  );
}

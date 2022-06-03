import { useState } from "react";
import Cart from "./Cart/Cart";
import "./NavBar.css";
import Menu from "./Menu/Menu";
import RouterNav from "./Menu/RouterNav/RouterNav";

import menuImage from "../../images/icon-menu.svg";

export default function NavBar() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const visibility = () => {
    setMenuVisibility((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <div className="navBar">
        <div className="navBar-menuImage" onClick={visibility}>
          <img src={menuImage} alt="Menu Image" />
        </div>

        <div className="navBar-logoImage"></div>
        <Cart />

        <div className="navBar-profilePic"></div>
      </div>
      <Menu menuVisibility={menuVisibility} visibilityFunc={visibility} />

      <div className="navBar-routerNav">
        <RouterNav classN={"desktopView"} />
      </div>
    </>
  );
}

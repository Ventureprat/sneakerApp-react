import "./Menu.css";
import RouterNav from "./RouterNav/RouterNav";

import closeBtn from "../../../images/icon-close.svg";

export default function Menu({ menuVisibility, visibilityFunc }) {
  if (menuVisibility) {
    return (
      <div className="menu">
        <img
          src={closeBtn}
          alt="closeBtn"
          className="menu-closeBtn"
          onClick={visibilityFunc}
        />
        <RouterNav classN={"mobileView"} />
      </div>
    );
  }
  return null;
}

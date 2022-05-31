import Cart from "./Cart/Cart";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar-threeLinesOption">
        <div className="navBar-lines"></div>
        <div className="navBar-lines"></div>
        <div className="navBar-lines"></div>
      </div>

      <div className="navBar-logoImage"></div>
      <Cart />

      <div className="navBar-profilePic"></div>
    </div>
  );
}

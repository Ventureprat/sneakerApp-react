import closeBtn from "../../../images/icon-close.svg";
import { Link, Outlet } from "react-router-dom";
import "./Menu.css";

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
        <>
          <ul className="menu-linkList">
            <li className="menu-links">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="menu-link"
              >
                Home
              </Link>
            </li>
            <li className="menu-links">
              <Link
                to="/Collections"
                style={{ textDecoration: "none" }}
                className="menu-link"
              >
                Collections
              </Link>
            </li>
            <li className="menu-links">
              <Link
                to="/Men"
                style={{ textDecoration: "none" }}
                className="menu-link"
              >
                Men
              </Link>
            </li>
            <li className="menu-links">
              <Link
                to="/Women"
                style={{ textDecoration: "none" }}
                className="menu-link"
              >
                Women
              </Link>
            </li>
            <li className="menu-links">
              <Link
                to="/About"
                style={{ textDecoration: "none" }}
                className="menu-link"
              >
                About
              </Link>
            </li>
            <li className="menu-links">
              <Link
                to="/Contact"
                style={{ textDecoration: "none" }}
                className="menu-link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Outlet />
        </>
      </div>
    );
  }
  return null;
}

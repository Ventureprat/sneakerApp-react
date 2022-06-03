import "./RouterNav.css";
import { Link, Outlet } from "react-router-dom";

export default function RouterNav({ classN }) {
  if (classN === "mobileView") {
    return (
      <>
        <ul className="routerNav-linkList-MV">
          <li className="routerNav-links-MV">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="routerNav-link-MV"
            >
              Home
            </Link>
          </li>
          <li className="routerNav-links-MV">
            <Link
              to="/Collections"
              style={{ textDecoration: "none" }}
              className="routerNav-link-MV"
            >
              Collections
            </Link>
          </li>
          <li className="routerNav-links-MV">
            <Link
              to="/Men"
              style={{ textDecoration: "none" }}
              className="routerNav-link-MV"
            >
              Men
            </Link>
          </li>
          <li className="routerNav-links-MV">
            <Link
              to="/Women"
              style={{ textDecoration: "none" }}
              className="routerNav-link-MV"
            >
              Women
            </Link>
          </li>
          <li className="routerNav-links-MV">
            <Link
              to="/About"
              style={{ textDecoration: "none" }}
              className="routerNav-link-MV"
            >
              About
            </Link>
          </li>
          <li className="routerNav-links-MV">
            <Link
              to="/Contact"
              style={{ textDecoration: "none" }}
              className="routerNav-link-MV"
            >
              Contact
            </Link>
          </li>
        </ul>

        <Outlet />
      </>
    );
  } else if (classN === "desktopView") {
    return (
      <>
        <ul className="routerNav-linkList-DV">
          <li className="routerNav-links-DV">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="routerNav-link-DV"
            >
              Home
            </Link>
          </li>
          <li className="routerNav-links-DV">
            <Link
              to="/Collections"
              style={{ textDecoration: "none" }}
              className="routerNav-link-DV"
            >
              Collections
            </Link>
          </li>
          <li className="routerNav-links-DV">
            <Link
              to="/Men"
              style={{ textDecoration: "none" }}
              className="routerNav-link-DV"
            >
              Men
            </Link>
          </li>
          <li className="routerNav-links-DV">
            <Link
              to="/Women"
              style={{ textDecoration: "none" }}
              className="routerNav-link-DV"
            >
              Women
            </Link>
          </li>
          <li className="routerNav-links-DV">
            <Link
              to="/About"
              style={{ textDecoration: "none" }}
              className="routerNav-link-DV"
            >
              About
            </Link>
          </li>
          <li className="routerNav-links-DV">
            <Link
              to="/Contact"
              style={{ textDecoration: "none" }}
              className="routerNav-link-DV"
            >
              Contact
            </Link>
          </li>
        </ul>

        <Outlet />
      </>
    );
  } else {
    return null;
  }
}

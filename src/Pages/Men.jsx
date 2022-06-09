import { Link } from "react-router-dom";
import "./AllPage.css";

export default function Men() {
  return (
    <>
      <Link className="AllPage-gapLink" to="/">
        Home
      </Link>
      <Link className="AllPage-gapLink" to="/About">
        About
      </Link>
      <Link className="AllPage-gapLink" to="/Contact">
        Contact
      </Link>
      <Link className="AllPage-gapLink" to="/Men">
        Collections
      </Link>
      <Link className="AllPage-gapLink" to="/Women">
        Women
      </Link>

      <hr />

      <h1>Men Page</h1>
    </>
  );
}

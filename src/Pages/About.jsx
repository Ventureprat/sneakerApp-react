import { Link } from "react-router-dom";
import "./AllPage.css";

export default function About() {
  return (
    <>
      <Link className="AllPage-gapLink" to="/">
        Home
      </Link>
      <Link className="AllPage-gapLink" to="/About">
        Collections
      </Link>
      <Link className="AllPage-gapLink" to="/Contact">
        Contact
      </Link>
      <Link className="AllPage-gapLink" to="/Men">
        Men
      </Link>
      <Link className="AllPage-gapLink" to="/Women">
        Women
      </Link>

      <hr />

      <h1>About Page</h1>
    </>
  );
}

import { Link } from "react-router-dom";
import "./AllPage.css";

export default function Contact() {
  return (
    <>
      <Link className="AllPage-gapLink" to="/">
        Home
      </Link>
      <Link className="AllPage-gapLink" to="/About">
        About
      </Link>
      <Link className="AllPage-gapLink" to="/Contact">
        Collections
      </Link>
      <Link className="AllPage-gapLink" to="/Men">
        Men
      </Link>
      <Link className="AllPage-gapLink" to="/Women">
        Women
      </Link>

      <hr />

      <h1>Contact Page</h1>
    </>
  );
}

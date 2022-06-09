import { Link } from "react-router-dom";
import "./AllPage.css";

export default function Women() {
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
        Men
      </Link>
      <Link className="AllPage-gapLink" to="/Women">
        Collections
      </Link>

      <hr />

      <h1>Women Page</h1>
    </>
  );
}

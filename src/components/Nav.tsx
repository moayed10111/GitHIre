
import { Link, useLocation } from "react-router-dom";
// import "./nav.css";

const Nav = () => {
  const currentPage = useLocation().pathname;

  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <ul>
        <li>
          <Link
            to="/"
            className={currentPage === "/home" ? "activeNav" : "restNav"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/SavedCandidates"
            className={
              currentPage === "/SavedCandidates" ? "activeNav" : "restNav"
            }
          >
            Potential Candidates
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import moment from "moment";
import { useContext } from "react";
import { SomeContext } from "./SomeContext";

const currentYear = moment().format("YYYY");

function NavBar() {
  const details = useContext(SomeContext);
  // const [details, setDetails] = useState("");
  // useEffect(() => {
  //   fetch("/klara.json")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setDetails(result.about.details);
  //       console.log(result.about);
  //     });
  // }, []);
  // const [showNav, setShowNav] = useState(false),
  //   location = useLocation();

  // function toggleNavbar() {
  //   setShowNav(!showNav);
  // }

  // function handleOpen() {
  //   toggleNavbar();
  // }
  // function handleClose() {
  //   toggleNavbar();
  // }

  // useEffect(() => {
  //   setShowNav(false);
  // }, [location]);

  return (
    <div className="NavBar">
      <div className="NavBar-top">
        <header>
          <p>Klara Bryntesson</p>

          {/* {showNav ? (
            <Icon.XLg onClick={handleClose} className="bi bi-x-lg"></Icon.XLg>
          ) : (
            <Icon.List onClick={handleOpen} className="bi bi-list" />
          )} */}
        </header>
        <nav>
          <ul className="NavBar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="NavBar-navbar">
        {showNav && (
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        )}
      </div> */}
      <div className="NavBar-navbar-left">
        {details !== null && (
          <div className="NavBar-icons">
            <a href={details.github}>
              <Icon.Github className="bi bi-github" />
            </a>
            <a href={details.linkedin}>
              <Icon.Linkedin className="bi bi-linkedin" />
            </a>
          </div>
        )}

        <p className="NavBar-year">® {currentYear}</p>
      </div>
    </div>
  );
}

export default NavBar;

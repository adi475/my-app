import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <a className="navbar-brand" href="#">
            <b>{props.title}</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <strong>Home</strong>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.aboutText}
                </a>
              </li>
            </ul>
          </div>

          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onClick={props.switch}
            />
            {/* <label className={`custom-control-label text-${props.mode === "light" ? "dark":"light"}`} htmlFor="customSwitch1"> */}
            {/* we can also use this ternary operator statement instead of below statement */}
            <label
              className={`custom-control-label text-${props.btn}`}
              htmlFor="customSwitch1"
            >
              {/* <strong>{props.Btn}</strong>   we can also use the state instead of ternary operator used below  */}
              <strong>
                {props.mode === "light"
                  ? "Enable Darkmode"
                  : "Disable Darkmode"}
              </strong>
            </label>
          </div>
        </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //isRequired  is used to make that particular props mandatory
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "about",
}; //defaultProps    is used to set dafault values of props. if we don't pass props value in component than this default values reflects in output.

export default Navbar;

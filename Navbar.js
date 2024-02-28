import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" href="/">
          {props.name}
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
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business">
                business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                general
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                technology
              </a>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        </form> */}
        </div>
        <div
          className={`form-check form-switch text-${
            props.darkMode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.darkMode === "light"
              ? "Enable Dark Mode"
              : "Disable Dark Mode"}
          </label>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

Navbar.defaultProps = {
  title: "Set title here",
  name: "Set name here",
};

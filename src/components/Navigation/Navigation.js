import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";
import Login from "../Login";

import { logout } from "../../store/actions/login";

import "./index.scss";

const Navigation = props => {
  return (
    <nav>
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/about">
        About Us
      </Link>
      {!props.isAuthenticated ? (
        <>
          <Login />
        </>
      ) : (
        <Link to={{ pathname: "/" }}>
          <a className="nav-item logout" onClick={props.logout}>
            Logout
          </a>
        </Link>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navigation);

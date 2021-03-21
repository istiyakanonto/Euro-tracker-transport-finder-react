import { Button } from "react-bootstrap";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="  col-sm-12 col-md-5 ">
          <img
            style={{ height: "175px", weidth: "175px" }}
            src="https://play-lh.googleusercontent.com/CXZBe3RtB-nqvfCPOcgMP2Mbi0YZTtBWWOfrCUiMGPAJFqKnxVwyCELU2Hmh5CfMlfq-"
            alt="error"
          />
        </div>

        <nav className=" col-sm-12 col-md-7  ">
          <Link to="/home">Home</Link>
          <Link to="/destination">Destination</Link>
          <a href="">Blog</a>
          <a href="">Contact</a>
          <Link to="/login">
            <button
              style={{ marginLeft: "40px" }}
              type="button"
              class="btn btn-danger"
            >
              LogIn
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;

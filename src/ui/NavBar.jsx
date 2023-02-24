import React from "react";
import "bootstrap/js/src/collapse.js";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TO DO LIST 3.1
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-dark nav-link mx-4" onClick={()=>{navigate("/")}}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-dark nav-link mx-4" onClick={()=>{navigate("/auth/register")}}>
                Register
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-dark nav-link mx-4" onClick={()=>{navigate("/auth/login")}}>
                  Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
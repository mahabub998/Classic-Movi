import React from "react";
import { Link } from "react-router-dom";
import moviLogo from "../../image/moviLogo.jpg";

import './Navbar.css';

<i class="fab fa-facebook"></i>

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success ">
    <div div className="container">
    <div className="nav-logo d-flex ">
      <img className="img-responsive rounded  imageHandel" src={moviLogo} alt="" />
      <span className="ms-2 mt-3">Movie Star</span>
    </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item ms-5">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item ms-5">
              <Link class="nav-link active" aria-current="page" to="*">
                about
              </Link>
            </li>
            <li class="nav-item ms-5">
              <Link class="nav-link active" aria-current="page" to="/login">
                login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

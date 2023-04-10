import React from "react";
import "../styles/navbar.css";
import { img } from "../assets/imagenes";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid">
          <img src={img.logo} className="logo" alt="" />
          <button
            className="navbar-toggler transparent"
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
              <li className="nav-item nav-aboutus">
                <a href="#titulo-1">
                  <p className="nav-link navbar-p focus navbar-text">
                    Nosotros
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#proyectos">
                  <p className="nav-link navbar-p navbar-text nav-proyects">
                    Proyectos
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contacto">
                  <p className="nav-link navbar-p navbar-text nav-contact">
                    Contacto
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

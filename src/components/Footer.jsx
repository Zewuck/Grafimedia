import React from "react";
import "../styles/footer.css";
import { img } from "../assets/imagenes";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="row w-100">
          <div className="col-4 mt-3">
            <h1 className="titulo-1-footer"> Navegación </h1>
            <p className="text-center">
              <a href="#titulo-1">
                <span className="navigation">Inicio</span>
              </a>
              <br />
              <a href="#titulo-2">
                <span className="navigation">Nosotros</span>
              </a>
              <br />
              <a href="#proyectos">
                <span className="navigation">Proyectos</span>
              </a>
              <br />
              <a href="#contacto">
                <span className="navigation">Contacto</span>
              </a>
            </p>
          </div>
          <div className="col-4 mt-3">
            <h1 className="titulo-1-footer" id="contacto">
              {" "}
              Contacto{" "}
            </h1>
            <p className="descripcion-contacto text-center">
              Puedes encontrarnos en nuestras redes sociales
            </p>
            <div className="text-center redes-container">
              <a href="#">
                <img className="redes mx-1" src={img.facebook}></img>
              </a>
              <a href="#">
                <img className="redes mx-1" src={img.instagram}></img>
              </a>
              <a href="#">
                <img className="redes mx-1" src={img.twitter}></img>
              </a>
              <a href="https://www.tiktok.com/@grafimedia1">
                <img className="redes mx-1" src={img.tiktok}></img>
              </a>
            </div>
          </div>
          <div className="col-4 mt-3 ">
            <div className="d-flex justify-content-center align-items-center">
              <img className="logo-footer" src={img.logo} />
            </div>
            <h1 className="descripcion-contacto text-center px-2">
              Nuestra meta es ir más allá de un simple trato de vendedor a
              cliente. Queremos formar una verdadero vinculo contigo,
              asesorándote constantemente y con una dedicación absoluta para
              ayudarte a impulsar y mejorar tu negocio. Juntos, lograremos tus
              objetivos ...
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

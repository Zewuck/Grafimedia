import { useMediaQuery } from "@material-ui/core";
import "../styles/inicio.css";
import { img } from "../assets/imagenes";

export function Slider() {
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <div>
      {isMobile ? (
        <div className="slider-container">
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-between imgs-container p-2">
                  <img
                    src={img.bootstrap}
                    alt="Slide 1"
                    className="d-block mx-auto logo-bootstrap"
                  />
                  <img
                    src={img.vercel}
                    alt="Slide 4"
                    className="d-block mx-auto vercel"
                  />
                  <img
                    src={img.nodejs}
                    alt="Slide 2"
                    className="d-block mx-auto logo-nodejs"
                  />
                  <img
                    src={img.react}
                    alt="Slide 3"
                    className="d-block mx-auto logo-react"
                  />
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-between imgs-container p-2">
                  <img
                    src={img.typescript}
                    alt="Slide 7"
                    className="d-block mx-auto logo-typescript"
                  />
                  <img
                    src={img.googleadsen}
                    alt="Slide 5"
                    className="d-block mx-auto logo-adsense"
                  />
                  <img
                    src={img.meta}
                    alt="Slide 6"
                    className="d-block mx-auto logo-meta"
                  />
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg"
                    alt="Slide 8"
                    className="d-block mx-auto logo-nestjs"
                  />
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="slider-container-2 p-2">
          <img
            src={img.bootstrap}
            alt="Slide 1"
            className="d-block mx-auto logo-bootstrap"
          />
          <img
            src={img.nodejs}
            alt="Slide 2"
            className="d-block mx-auto logo-nodejs"
          />
          <img
            src={img.vercel}
            alt="Slide 4"
            className="d-block mx-auto vercel"
          />
          <img
            src={img.react}
            alt="Slide 3"
            className="d-block mx-auto logo-react"
          />
          <img
            src={img.googleadsen}
            alt="Slide 5"
            className="d-block mx-auto logo-adsense"
          />
          <img
            src={img.typescript}
            alt="Slide 7"
            className="d-block mx-auto logo-typescript"
          />
          <img
            src={img.meta}
            alt="Slide 6"
            className="d-block mx-auto logo-meta"
          />
          <img
            src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg"
            alt="Slide 8"
            className="d-block mx-auto logo-nestjs"
          />
        </div>
      )}
    </div>
  );
}

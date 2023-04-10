import "../styles/inicio.css";
import "../styles/cards.css";
import { img } from "../assets/imagenes";

export function BodyPage() {
  return (
    <>
      <div className="body">
        <div className="mx-2 mt-2 body-container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7">
              <h1 className="titulo-1" id="titulo-1">
                ¿Estas listo para llegar mas lejos?
              </h1>
              <p className="descripcion-titulo-1">
                El uso de internet crece constantemente, incluyendo a tus
                futuros clientes. Un sitio web atractivo muestra tus productos y
                servicios efectivamente atrayendo nuevos clientes, lo que puede
                ser decisivo para trabajar con nosotros.
              </p>
            </div>
            <div className="col-sm-0 col-md-0 col-lg-3 col-xl-3"></div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 grafimedia-container">
              <img className="grafimediaimg" src={img.grafiemdiaimg} />
              <img className="grafimediafondo" src={img.fondografimedia} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row flex-column">
                <div className="col">
                  <h1 className="titulo-2 mt-2" id="titulo-2">
                    ¿Por qué contratarnos?
                  </h1>
                  <p className="titulo-2-description">
                    Transformamos tu visión en una página web de impacto con
                    nuestro enfoque en marketing digital y desarrollo web.
                    Contamos con 5 años de experiencia en el mercado, combinamos
                    tendencias actuales con un diseño atractivo para entregarte
                    la página web de tus sueños{" "}
                    <span className="span-azul">
                      en un tiempo récord menor de 3 días.
                    </span>
                  </p>
                </div>
                <div className="col">
                  <h1 className="titulo-3">Nuestro propósito</h1>
                  <p className="titulo-3-description">
                    Nuestra meta es ir más allá de un simple trato de vendedor a
                    cliente. Queremos formar una verdadero vinculo contigo,
                    asesorándote constantemente y con una dedicación absoluta
                    para ayudarte a impulsar y mejorar tu negocio. Juntos,
                    lograremos tus objetivos y nos aseguraremos de que tengas el
                    éxito que te mereces{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="titulo-4-container">
              <h1 className="titulo-4">Diseño Web</h1>
            </div>
            <p className="titulo-4-description">
              Tenemos la experiencia y la creatividad necesaria para formular
              soluciones que conecten tu negocio a internet y generar el impacto
              que estabas buscando.
            </p>
          </div>
          <div>
            <div className="row cards-container">
              <div className="colsm6 col-md-4 col-lg-4 col-xl-4">
                <div className="card-container">
                  <div className="card-1">
                    <div className="d-flex justify-content-center align-items-center mt-1 mx-1">
                      <span className="titulo-card-1">Web Personal</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-1 mx-1">
                      <span className="descripcion-titulo-1-card">
                        ¿Eres influenciador? ¿Tienes alguna marca personal?
                        Hazte conocer con este plan especial
                      </span>
                    </div>
                    <div className="precio-card-1-container">
                      <h1 className="precio-card-1">$400.000/COP</h1>
                    </div>
                    <div>
                      <p className="card-1-descripcion">
                        - Dominio Web personalizado <br /> - Sitio web estático
                        con 1 página <br /> - Certificado SSL de Seguridad{" "}
                        <br /> - Alojamiento gratuito por 2 años <br /> - Social
                        Media Kit <br /> - Mantenimiento 24/7
                      </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <a href="https://wa.me/573187523425?">
                        <span className="cuentame py-1">Cuéntame mas!</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colsm6 col-md-4 col-lg-4 col-xl-4">
                <div className="card-container">
                  <div className="card-2">
                    <div className="d-flex justify-content-center align-items-center mt-1 mx-1">
                      <span className="titulo-card-1">Plan Pymes</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-1 mx-1">
                      <span className="descripcion-titulo-2-card">
                        Conecta e impulsa tu negocio con nuestro plan especial
                        para todos.
                      </span>
                    </div>
                    <div className="precio-card-2-container">
                      <h1 className="precio-card-1">$500.000/COP</h1>
                    </div>
                    <div>
                      <p className="card-2-descripcion">
                        - Dominio Web personalizado <br />
                        - Sitio web estático con 3 páginas <br />- Certificado
                        SSL de Seguridad <br /> - Alojamiento gratuito por 1 año{" "}
                        <br /> - Posicionamiento en buscadores (SEO) <br />
                        - Social Media Kit <br /> - Mantenimiento por un mes
                      </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <a href="https://wa.me/573187523425?">
                        <span className="cuentame-2 py-1">Cuéntame mas!</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="card-container">
                  <div className="card-3">
                    <div className="d-flex justify-content-center align-items-center mt-1 mx-1">
                      <span className="titulo-card-1">Landing page</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-1 mx-1">
                      <span className="descripcion-titulo-3-card">
                        Muestra información relevante a tus clientes a través de
                        un sitio web pequeño, sencillo y atractivo
                      </span>
                    </div>
                    <div className="precio-card-1-container">
                      <h1 className="precio-card-1">$300.000/COP</h1>
                    </div>
                    <div>
                      <p className="card-3-descripcion">
                        - Dominio Web personalizado <br />
                        - Sitio web estático con 1 página <br />
                        - Certificado SSL de Seguridad <br />
                        - Alojamiento gratuito por 2 años <br />- Mantenimiento
                        24/7
                      </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <a href="https://wa.me/573187523425?">
                        <span className="cuentame py-1">Cuéntame mas!</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <p className="nota">
              Nota: Los precios mostrados aquí son precios bases, y pueden
              variar dependiendo de tus necesidades e el tipo de mantenimiento
              para mayor información escríbenos por{" "}
              <span className="span-azul">redes sociales</span> o llama al
              <span className="span-azul">+57 322 305 8760</span>
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="titulo-4" id="proyectos">
              Portafolio
            </h1>
          </div>
          <div className="row">
            <div className="colsm6 col-md-4 col-lg-4 col-xl-4 mb-2">
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://mastercarsautotronica.com/">
                  <img src={img.mastercars} id="portafolio__img" />
                </a>
              </div>
            </div>
            <div className="colsm6 col-md-4 col-lg-4 col-xl-4 mb-2">
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://gentle-dusk-266281.netlify.app">
                  <img src={img.cattitos} id="portafolio__img" />
                </a>
              </div>
            </div>
            <div className="colsm6 col-md-4 col-lg-4 col-xl-4 mb-2">
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://grafimedia.org/Rvoz.html">
                  <img src={img.rvoz} id="portafolio__img" />
                </a>
              </div>
            </div>
            <div className="colsm6 col-md-4 col-lg-4 col-xl-4 mb-2">
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://grafimedia.org/Buffalo-Restaurante-main/Buffalo%20Rstaurant/index.html">
                  <img src={img.buffalo} id="portafolio__img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

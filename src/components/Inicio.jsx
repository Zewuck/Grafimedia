import "../styles/inicio.css";

export function InicioPage() {
  return (
    <div className="inicio">
      <div className="fondo-inicio-container">
        <div className="text-inicio-container">
          <p className="text-inicio1">
            Eres tú quien establece tus límites de logro
          </p>
          <p className="text-inicio2">
            Somos una Agencia de Marketing y{" "}
            <span className="span-desarrolloweb">Desarrollo Web</span>
          </p>
        </div>
        <div className="imagen-inicio"></div>
      </div>
    </div>
  );
}

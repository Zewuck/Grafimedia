import { Slider } from "../components/Slider";
import { InicioPage } from "../components/Inicio";
import { BodyPage } from "../components/Body";

function Inicio() {
  return (
    <>
      <InicioPage />
      <Slider />
      <BodyPage/>
    </>
  );
}

export default Inicio;

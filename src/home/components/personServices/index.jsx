import PersonServiceCard from "./components/personServiceCard";
import final from "../../../../public/imgs/finaldeobra.jpg";
import pintura from "../../../../public/imgs/pintura.jpg";
import alfombras from "../../../../public/imgs/tapizados.jpg";
import pisos from "../../../../public/imgs/piso.jpg";
import style from "./personServices.module.css";
import bg from "../../../../public/imgs/white-two.jpg";

const data = [
  {
    title: "FINAL DE OBRA",
    image: final.src,
    route: "final-de-obra",
    id: 7,
  },
  {
    title: "PINTURA",
    image: pintura.src,
    id: 8,
    route: "pintura",
  },
  {
    title: "OBRAS Y REFORMAS",
    image: alfombras.src,
    route: "obras-reformas",
    id: 9,
  },
  {
    title: "TRATAMIENTOS DE PISOS",
    image: pisos.src,
    id: 10,
    route: "pisos",
  },
];

export default function PersonServices() {
  return (
    <div
      id="servicios"
      style={{
        backgroundImage: `url(${bg.src})`,
        // backgroundColor: "whitesmoke",
        backgroundSize: "cover",
        height: "100%",
        position: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px 60px 20px",
      }}
    >
      <div className={style.headContainer}>
        <h1 className={style.heading}>Servicios en Domcilio</h1>
      </div>
      <div style={{ maxWidth: "1400px" }}>
        <PersonServiceCard data={data} />
      </div>
    </div>
  );
}

// - VIDRIOS EN ALTURA
// - DESINFECCION
// - CONTROL DE PLAGA
// - FINAL DE OBRA
// - PINTURA
// - ALFOMBRAS Y TAPIZADOS
// - TRATAMIENTOS DE PISOS

import ServiceCard from "./ServiceCard";
import bg from "../../public/imgs/livingRom.jpg";
import vidrios from "../../public/imgs/vidrios.jpg";
import desinfeccion from "../../public/imgs/desinfeccion.jpg";
import control from "../../public/imgs/fumigacion.jpg";
import final from "../../public/imgs/finaldeobra.jpg";
import pintura from "../../public/imgs/pintura.jpg";
import alfombras from "../../public/imgs/tapizados.jpg";
import pisos from "../../public/imgs/piso.jpg";
import style from "../services/main.module.css";

const data = [
  {
    title: "FINAL DE OBRA",
    image: final.src,
  },
  {
    title: "PINTURA",
    image: pintura.src,
  },
  {
    title: "OBRAS Y REFORMAS",
    image: alfombras.src,
  },
  {
    title: "TRATAMIENTOS DE PISOS",
    image: pisos.src,
  },
];

export default function Services() {
  return (
    <div
      id="servicios"
      style={{
        // backgroundImage: `url(${bg.src})`,
        backgroundColor: "whitesmoke",
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
        <ServiceCard data={data} />
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

import bg from "../../public/imgs/office.jpg";
import vidrios from "../../public/imgs/vidrios.jpg";
import desinfeccion from "../../public/imgs/desinfeccion.jpg";
import control from "../../public/imgs/fumigacion.jpg";
import final from "../../public/imgs/finaldeobra.jpg";
import pintura from "../../public/imgs/pintura.jpg";
import alfombras from "../../public/imgs/tapizados.jpg";
import pisos from "../../public/imgs/piso.jpg";
import style from "../newServ/page.module.css";
import ServiceCard from "./newServCard";

const data = [
  {
    title: "VIDRIOS",
    image: vidrios.src,
  },
  {
    title: "Desinfeccion",
    image: desinfeccion.src,
  },
  {
    title: "CONTROL DE PLAGAs",
    image: control.src,
  },
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

export default function newServ() {
  return (
    <div
      id="servicios-empresariales"
      style={{
        // backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        height: "100%",
        position: "center",
        marginTop: "100px",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "35px 0px 35px 0px",
      }}
    >
      <div className={style.headContainer}>
        <h1 className={style.heading}>Servicios Empresariales</h1>
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

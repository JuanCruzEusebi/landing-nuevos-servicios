import bg from "../../public/imgs/office.jpg";
import vidrios from "../../public/imgs/vidrios.jpg";
import desinfeccion from "../../public/imgs/desinfeccion.jpg";
import control from "../../public/imgs/fumigacion.jpg";
import final from "../../public/imgs/finaldeobra.jpg";
import pintura from "../../public/imgs/pintura.jpg";
import alfombras from "../../public/imgs/tapizados.jpg";
import pisos from "../../public/imgs/piso.jpg";
import ServiceCard from "./ServiceCard";
import style from "../servEmp/newServCard.module.css";

const data = [
  {
    title: "VIDRIOS",
    image: vidrios.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "vidrios",
  },
  {
    title: "Desinfeccion",
    image: desinfeccion.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "desinfeccion",
  },
  {
    title: "CONTROL DE PLAGAs",
    image: control.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "control-de-plagas",
  },
  {
    title: "FINAL DE OBRA",
    image: final.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "final-de-obra",
  },
  {
    title: "PINTURA",
    image: pintura.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "pintura",
  },
  {
    title: "OBRAS Y REFORMAS",
    image: alfombras.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "obras-reformas",
  },
  {
    title: "TRATAMIENTOS DE PISOS",
    image: pisos.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "pisos",
  },
];

export default function newServ() {
  return (
    <div
      id="servEmp"
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

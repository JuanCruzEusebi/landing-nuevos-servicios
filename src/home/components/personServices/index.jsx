import PersonServiceCard from "./components/personServiceCard";
import final from "../../../../public/imgs/finaldeobra.jpg";
import pintura from "../../../../public/imgs/pintura.jpg";
import alfombras from "../../../../public/imgs/tapizados.jpg";
import pisos from "../../../../public/imgs/piso.jpg";
import style from "./personServices.module.css";
import bg from "../../../../public/imgs/white-two.jpg";
import control from "../../../../public/imgs/fumigacion.jpg";
import vidrios from "../../../../public/imgs/vidrios.jpg";

const data = [
  {
    title: "CONTROL DE PLAGAs",
    image: control.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "control-de-plagas",
    id: 3,
  },
  {
    title: "LIMPIEZA PROFESIONAL",
    image: final.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "limpieza-profesional",
    id: 4,
  },
  {
    title: "PINTURA",
    image: pintura.src,
    id: 8,
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo alias facere numquam laboriosam laudantium cum optio aliquid consequatur inventore expedita.",
    route: "pintura",
  },
  {
    title: "OBRAS Y REFACCIONES",
    image: alfombras.src,
    route: "obras-reformas",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo alias facere numquam laboriosam laudantium cum optio aliquid consequatur inventore expedita.",
    id: 9,
  },
];

export default function PersonServices() {
  return (
    <div
      id="servicios"
      style={{
        backgroundImage: `url(${bg.src})`,
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
        <h1 className={style.heading}>Servicios en Hogares</h1>
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

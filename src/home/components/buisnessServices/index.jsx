import vidrios from "../../../../public/imgs/vidrios.jpg";
import control from "../../../../public/imgs/fumigacion.jpg";
import final from "../../../../public/imgs/finaldeobra.jpg";
import ServiceCard from "./components/buisnessServiceCard";
import style from "../buisnessServices/buisnessService.module.css";
import limpieza from "../../../../public/imgs/limpieza-emp.jpeg";

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
    image: limpieza.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "limpieza-empresas",
    id: 4,
  },
  {
    title: "PINTURA",
    image: vidrios.src,
    id: 8,
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo alias facere numquam laboriosam laudantium cum optio aliquid consequatur inventore expedita.",
    route: "pintura-empresas",
  },
  {
    title: "OBRAS Y REFACCIONES",
    image: final.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "final-de-obra",
    id: 4,
  },
];

export default function newServ() {
  return (
    <div
      id="servEmp"
      style={{
        backgroundColor: "#163583",
        backgroundSize: "cover",
        height: "100%",
        position: "center",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px 50px 20px",
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

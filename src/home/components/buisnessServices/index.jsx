import vidrios from "../../../../public/imgs/vidrios.jpg";
import desinfeccion from "../../../../public/imgs/desinfeccion.jpg";
import control from "../../../../public/imgs/fumigacion.jpg";
import final from "../../../../public/imgs/finaldeobra.jpg";
import ServiceCard from "./components/buisnessServiceCard";
import style from "../buisnessServices/buisnessService.module.css";

const data = [
  {
    title: "VIDRIOS",
    image: vidrios.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "vidrios",
    id: 1,
  },
  {
    title: "DESINFECCIÓN",
    image: desinfeccion.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "desinfeccion",
    id: 2,
  },
  {
    title: "CONTROL DE PLAGAs",
    image: control.src,
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus itaque quod omnis tempore delectus minima distinctio illum amet nobis mollitia!",
    route: "control-de-plagas",
    id: 3,
  },
  {
    title: "FINAL DE OBRA",
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
        // backgroundImage: `url(${bg.src})`,
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

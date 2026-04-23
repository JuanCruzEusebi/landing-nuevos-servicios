import PersonServiceCard from "./components/personServiceCard";
import style from "./personServices.module.css";
import pintura from "../../../../public/imgs/pintura-despues.jpeg";
import control from "../../../../public/imgs/control-de-plagas1.jpeg";
import limpieza from "../../../../public/imgs/limpieza-hogares-1.jpeg";
import obras from "../../../../public/imgs/obras.jpeg";

const data = [
  {
    title: "Control de Plagas",
    image: control.src,
    route: "control-de-plagas",
  },
  {
    title: "Limpieza Profesional",
    image: limpieza.src,
    route: "limpieza-profesional",
  },
  {
    title: "Pintura",
    image: pintura.src,
    route: "pintura",
  },
  {
    title: "Obras y Refacciones",
    image: obras.src,
    route: "obras-reformas",
  },
];

export default function PersonServices() {
  return (
    <section id="servicios" className={style.section}>
      <div className={style.sectionHeader}>
        <div className={style.headerLeft}>
          <span className={style.eyebrow}>— Particulares</span>
          <h2 className={style.heading}>Servicios<br />en Hogares</h2>
        </div>
        <p className={style.sectionDesc}>
          Diseñamos cada servicio con un programa de trabajo a medida,
          con el personal, productos y maquinaria adecuados para tu hogar.
        </p>
      </div>
      <PersonServiceCard data={data} />
    </section>
  );
}

import ServiceCard from "./components/buisnessServiceCard/index";
import style from "./buisnessService.module.css";
import fumigacion from "../../../../public/imgs/fumigacion.jpg";
import limpieza from "../../../../public/imgs/limpieza-emp.jpeg";
import obras from "../../../../public/imgs/obras-empresas.jpeg";
import pintura from "../../../../public/imgs/pintura-despues.jpeg";

const data = [
  {
    title: "Control de Plagas",
    image: fumigacion.src,
    route: "control-de-plagas",
  },
  {
    title: "Limpieza Profesional",
    image: limpieza.src,
    route: "limpieza-empresas",
  },
  {
    title: "Pintura",
    image: pintura.src,
    route: "pintura-empresas",
  },
  {
    title: "Obras y Refacciones",
    image: obras.src,
    route: "final-de-obra",
  },
];

export default function BuisnessServices() {
  return (
    <section id="servEmp" className={style.section}>
      <div className={style.sectionHeader}>
        <div className={style.headerLeft}>
          <span className={style.eyebrow}>— Corporativo</span>
          <h2 className={style.heading}>Servicios<br />Empresariales</h2>
        </div>
        <p className={style.sectionDesc}>
          Soluciones profesionales para empresas, comercios e industrias.
          Equipos especializados con protocolos diseñados a la medida de cada cliente.
        </p>
      </div>
      <ServiceCard data={data} />
    </section>
  );
}

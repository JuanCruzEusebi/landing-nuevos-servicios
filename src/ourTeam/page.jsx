import style from "../aboutUs/aboutUs.module.css";

export default function OurTeam() {
  return (
    <section id="sobre-nos" className={style.mainContainer}>
      <div className={style.headContainer}>
        <h1 className={style.heading}>
          Nuestro <br /> Equipo
        </h1>
      </div>
      <div className={style.infoContainer}>
        <p className={style.paragraph} style={{ lineHeight: "30px" }}>
          Contamos con equipos armados para trabajos eventuales, como pueden ser
          visitas a planta, urgencias o finales de obra. Prestamos soluciones
          rápidas para situaciones extraordinarias, ya sea por auditorias,
          problemas climáticos o eventos.
          <br />
          Para todos los servicios que prestamos nuestra empresa tiene a todos
          sus empleados, bajo relación de dependencia, con los aportes, seguros,
          ART, y pólizas exigidas por ley.
        </p>
      </div>
    </section>
  );
}

import style from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <section id="sobre-nos" className={style.mainContainer}>
      <div className={style.headContainer}>
        <h1 className={style.heading}>
          Sobre <br /> Nosotros
        </h1>
      </div>
      <div className={style.infoContainer}>
        <p className={style.paragraph}>
          Somos una empresa con más de 10 años de experiencia brindando
          múltiples servicios y mantenimientos generales a una gran cartera de
          clientes. Cada servicio cuenta con un programa de trabajo diseñado a
          medida, en el cual se detallan las rutinas del personal, los productos
          y la maquinaria a utilizar.
        </p>
      </div>
    </section>
  );
}

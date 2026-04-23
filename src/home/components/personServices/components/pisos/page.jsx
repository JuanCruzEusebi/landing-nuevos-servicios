import style from "./page.module.css";
import Image from "next/image";

export default function Pisos() {
  return (
    <section className={style.mainContainer}>
      <div className={style.inner}>
        <div className={style.imagesContainer}>
          <Image src="/imgs/piso.jpg" alt="Tratamiento de pisos" width={400} height={300} className={style.img} />
          <Image src="/imgs/tapizados.jpg" alt="Limpieza de tapizados" width={400} height={300} className={style.img} />
          <Image src="/imgs/limpieza-hogares-1.jpeg" alt="Limpieza hogar" width={400} height={300} className={style.img} />
          <Image src="/imgs/limpieza-hogares-2.jpeg" alt="Limpieza hogar 2" width={400} height={300} className={style.img} />
        </div>
        <div className={style.descriptionContainer}>
          <span className={style.label}>Servicio especializado</span>
          <h1>Tratamiento de Pisos</h1>
          <ul className={style.list}>
            <li>Abrillantado y pulido de pisos</li>
            <li>Limpieza profunda de alfombras y tapizados</li>
            <li>Tratamientos de protección y sellado</li>
            <li>Limpieza para eventos especiales</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

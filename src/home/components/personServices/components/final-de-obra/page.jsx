import style from "./page.module.css";
import Image from "next/image";

export default function FinalDeObra() {
  return (
    <section className={style.mainContainer}>
      <div className={style.inner}>
        <div className={style.descriptionContainer}>
          <span className={style.label}>Servicio especializado</span>
          <h1>Limpieza Final de Obra</h1>
          <ul className={style.list}>
            <li>Retiro de escombros y residuos de construcción</li>
            <li>Limpieza profunda de pisos, paredes y cielorrasos</li>
            <li>Desengrase de superficies y cerámicos</li>
            <li>Limpieza de aberturas, herrajes y sanitarios</li>
          </ul>
        </div>
        <div className={style.imagesContainer}>
          <Image src="/imgs/limpieza-hogares-1.jpeg" alt="Final de obra 1" width={400} height={300} className={style.img} />
          <Image src="/imgs/limpieza-hogares-2.jpeg" alt="Final de obra 2" width={400} height={300} className={style.img} />
          <Image src="/imgs/limpieza-hogares-3.jpeg" alt="Final de obra 3" width={400} height={300} className={style.img} />
          <Image src="/imgs/limpieza-hogares-4.jpeg" alt="Final de obra 4" width={400} height={300} className={style.img} />
        </div>
      </div>
    </section>
  );
}

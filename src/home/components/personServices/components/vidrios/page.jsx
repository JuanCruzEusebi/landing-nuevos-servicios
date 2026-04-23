import Image from "next/image";
import style from "./page.module.css";

export default function Vidrios() {
  return (
    <section className={style.mainContainer}>
      <div className={style.inner}>
        <div className={style.descriptionContainer}>
          <span className={style.label}>Servicio especializado</span>
          <h1>Limpieza de Vidrios</h1>
          <ul className={style.list}>
            <li>Limpieza de ventanas interiores y exteriores</li>
            <li>Vidrios en altura con equipamiento especializado</li>
            <li>Acabado sin manchas ni residuos</li>
            <li>Tratamiento de marcos y perfiles</li>
          </ul>
        </div>
        <div className={style.imagesContainer}>
          <Image src="/imgs/vidrios-hogares-1.jpg" alt="Vidrios hogar 1" width={400} height={300} className={style.img} />
          <Image src="/imgs/vidrios-hogares-3.jpeg" alt="Vidrios hogar 3" width={400} height={300} className={style.img} />
          <Image src="/imgs/limpieza.jpeg" alt="Limpieza profesional" width={400} height={300} className={style.img} />
          <Image src="/imgs/vidrios-hogares-4.jpeg" alt="Vidrios hogar 4" width={400} height={300} className={style.img} />
        </div>
      </div>
    </section>
  );
}

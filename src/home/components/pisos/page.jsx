import style from "../../../../app/person-services/obras-reformas/page.module.css";
import Image from "next/image";

export default function Pisos() {
  return (
    <section>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1>Tratamiento de Pisos</h1>
          <h2>Servicios de:</h2>
          <ul>
            <li>Abrillantado de pisos</li>
            <li>Limpiezas de alfombras</li>
            <li>Limpieza de eventos especiales</li>
          </ul>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            width={200}
            height={200}
          />
          <Image
            src="/imgs/finaldeobra.jpg"
            width={200}
            height={200}
            alt="pic"
          />
          <Image
            src="/imgs/finaldeobra.jpg"
            width={400}
            height={200}
            alt="pic"
          />
        </div>
      </article>
    </section>
  );
}
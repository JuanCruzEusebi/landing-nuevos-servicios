import Image from "next/image";
import style from "../../../../../../app/person-services/obras-reformas/page.module.css";

export default function Vidrios() {
  return (
    <section>
      <article className={style.vidriosContainer}>
        <div className={style.descriptionContainer}>
          <h1 className={style.heading}>Vidrios</h1>
          <h2 className={style.subHeading}>
            Servicio de limpieza de vidrios en altura
          </h2>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            width={50}
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

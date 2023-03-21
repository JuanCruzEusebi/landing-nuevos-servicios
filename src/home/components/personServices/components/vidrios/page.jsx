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
            placeholder="blur"
            blurDataURL={"/imgs/desinfeccion.jpg"}
          />
        </div>
      </article>
    </section>
  );
}

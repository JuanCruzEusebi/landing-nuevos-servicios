import style from "./page.module.css";
import Image from "next/image";

export default function FinalDeObra() {
  return (
    <section>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1>Final de Obra</h1>
          <h2 className={style.subHeading}>
            Servicio de limpieza final de obra
          </h2>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={"/imgs/desinfeccion.jpg"}
          />
        </div>
      </article>
    </section>
  );
}

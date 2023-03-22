import Image from "next/image";
import style from "../../../personServices/components/vidrios/page.module.css";

export default function Vidrios() {
  return (
    <section>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1 className={style.heading}>Vidrios</h1>
          <h2 className={style.subHeading}>
            Servicio de limpieza de vidrios en altura
          </h2>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/fumi-emp-1.jpg"
            alt="pic"
            width={50}
            height={200}
            className={style.img}
          />
        </div>
      </article>
    </section>
  );
}

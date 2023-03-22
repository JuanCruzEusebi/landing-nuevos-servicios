import style from "./page.module.css";
import Image from "next/image";

export default function FinalDeObra() {
  return (
    <article className={style.mainContainer}>
      <div className={style.descriptionContainer}>
        <h1>Limpieza fin de obra</h1>
      </div>
      <div className={style.imagesContainer}>
        <Image
          src="/imgs/limpieza-hogares-1.jpeg"
          alt="pic"
          width={300}
          height={200}
          className={style.img}
        />
        <Image
          src="/imgs/limpieza-hogares-2.jpeg"
          alt="pic"
          width={300}
          height={200}
          className={style.img}
        />
        <Image
          src="/imgs/limpieza-hogares-3.jpeg"
          alt="pic"
          width={300}
          height={200}
          className={style.img}
        />
        <Image
          src="/imgs/limpieza-hogares-4.jpeg"
          alt="pic"
          width={300}
          height={200}
          className={style.img}
        />
      </div>
    </article>
  );
}

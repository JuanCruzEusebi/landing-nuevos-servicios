import Image from "next/image";
import style from "./page.module.css";

export default function Vidrios() {
  return (
    <section>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1 className={style.heading}>Limpieza de vidrios en hogares</h1>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/vidrios-hogares-1.jpg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
          <Image
            src="/imgs/vidrios-hogares-3.jpeg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
          <Image
            src="/imgs/limpieza.jpeg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
          <Image
            src="/imgs/vidrios-hogares-4.jpeg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
        </div>
      </article>
    </section>
  );
}

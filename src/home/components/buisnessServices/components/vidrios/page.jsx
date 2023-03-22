import Image from "next/image";
import style from "../../../personServices/components/vidrios/page.module.css";

export default function Vidrios() {
  return (
    <section>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1 className={style.heading}>
            Servicio de limpieza de vidrios en altura
          </h1>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/vidrios-emp.jpg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
          <Image
            src="/imgs/vidrios-emp2.jpg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
          <Image
            src="/imgs/vidrios-emp3.jpg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
          <Image
            src="/imgs/limpieza-emp.jpeg"
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

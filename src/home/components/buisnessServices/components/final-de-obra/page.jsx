import style from "../../../personServices/components/final-de-obra/page.module.css";

import Image from "next/image";

export default function FinalDeObra() {
  return (
    <section>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1>Limpieza final de obra</h1>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/obras-emp1.jpeg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
          <Image
            src="/imgs/obras-emp-2.jpeg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
          <Image
            src="/imgs/obras-emp-3.jpeg"
            alt="pic"
            width={300}
            height={200}
            className={style.img}
          />
          <Image
            src="/imgs/obras-empresas.jpeg"
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

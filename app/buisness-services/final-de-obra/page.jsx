import Header from "../../../src/header";
import Footer from "../../../src/footer";
import style from "../../person-services/obras-reformas/page.module.css";

import Image from "next/image";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";

export default function Obras() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1> Obras y refacciones </h1>
          <h2>
            Realizamos el diseño, construcción, mantenimiento y refacción de
            comercios y/0 viviendas
          </h2>
          <p>
            Nos encargamos de todos los rubros que conforman una obra,con esto
            se logra facilitar el desarrollo y gerenciamiento del proyecto{" "}
          </p>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            width={300}
            placeholder="blur"
            blurDataURL={"/imgs/desinfeccion.jpg"}
            height={200}
            className={style.img}
          />
        </div>
      </article>
      <PersonServices></PersonServices>
      <BuisnessServices></BuisnessServices>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
}

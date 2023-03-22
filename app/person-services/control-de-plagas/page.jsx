import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Image from "next/image";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import OurTeam from "../../../src/ourTeam/page";
import style from "./page.module.css";

export default function ControlDePlagas() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1>Servicio integral de control de plagas</h1>
          <p>Contamos con tratamientos rápidos, eficaces y exhaustivos.</p>
          <p>
            Nuestros servicios abarcan control de insectos, control de roedores,
            monitoreo y certificaciones.
          </p>

          <p className={style.para}>
            Las plagas e invasores son un serio problema para la salud, además
            de dar una mala imagen del lugar en que se desarrollan. Contáctenos
            ahora mismo para que podamos ofrecerle una solución integral a sus
            problemas de plagas.
          </p>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/fumi1.jpg"
            width={350}
            height={350}
            alt="fumi1"
            className={style.img}
          />
          <Image
            src="/imgs/fumi2.jpg"
            width={350}
            height={350}
            className={style.img}
            alt="fumi2"
          />
          <Image
            src="/imgs/fumi3.jpg"
            width={350}
            height={350}
            className={style.img}
            alt="fumi3"
          />
          <Image
            src="/imgs/fumi4.jpg"
            width={350}
            height={350}
            alt="fumi4"
            className={style.img}
          />
        </div>
      </article>
      <OurTeam></OurTeam>
      <PersonServices></PersonServices>
      <BuisnessServices></BuisnessServices>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
}

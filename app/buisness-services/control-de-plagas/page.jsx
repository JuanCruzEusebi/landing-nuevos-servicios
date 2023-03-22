import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Image from "next/image";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import style from "../../person-services/control-de-plagas/page.module.css";
import OurTeam from "../../../src/ourTeam/page";

export default function ControlDePlagas() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1>Servicio integral de control de plagas</h1>
          <ul className={style.ul}>
            <li>Tratamientos rápidos, eficaces y exhaustivos.</li>
            <li>
              Control de insectos, control de roedores, monitoreo y
              certificaciones
            </li>
          </ul>
          <p>
            Las plagas e invasores son un serio problema para la salud, además
            de dar una mala imagen del lugar en que se desarrollan. Contáctenos
            ahora mismo para que podamos ofrecerle una solución integral a sus
            problemas de plagas.
          </p>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/fumi-emp-1.jpg"
            placeholder="blur"
            blurDataURL={"/imgs/desinfeccion.jpg"}
            alt="pic"
            width={400}
            height={350}
            className={style.img}
          />
          <Image
            src="/imgs/fumi-emp-2.jpg"
            placeholder="blur"
            blurDataURL={"/imgs/desinfeccion.jpg"}
            alt="pic"
            width={400}
            className={style.img}
            height={350}
          />
          <Image
            src="/imgs/fumi-emp-3.jpg"
            placeholder="blur"
            blurDataURL={"/imgs/desinfeccion.jpg"}
            alt="pic"
            className={style.img}
            width={400}
            height={350}
          />
          <Image
            src="/imgs/fumi-emp-4.jpg"
            placeholder="blur"
            blurDataURL={"/imgs/desinfeccion.jpg"}
            alt="pic"
            className={style.img}
            width={400}
            height={350}
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

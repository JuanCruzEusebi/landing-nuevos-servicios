import Header from "@/src/headerapp";
import Footer from "@/src/footerapp";
import style from "../../person-services/obras-reformas/page.module.css";
import Image from "next/image";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";

export default function ControlDePlagas() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1>Servicio integral de control de plagas</h1>
          <ul>
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
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            width={200}
            height={200}
          />
          <Image
            src="/imgs/finaldeobra.jpg"
            width={200}
            height={200}
            alt="pic"
          />
          <Image
            src="/imgs/finaldeobra.jpg"
            width={400}
            height={200}
            alt="pic"
          />
        </div>
      </article>
      <BuisnessServices></BuisnessServices>

      <PersonServices></PersonServices>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
}

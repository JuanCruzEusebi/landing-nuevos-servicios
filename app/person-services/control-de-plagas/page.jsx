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
          <ul>
            <li>Tratamientos rápidos, eficaces y exhaustivos.</li>
            <li>
              Control de insectos, control de roedores, monitoreo y
              certificaciones.
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
          <Image src="/imgs/Frame1.jpg" width={350} height={350} alt="pic" />
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

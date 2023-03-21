import Header from "../../../src/header";
import Footer from "../../../src/footer";
import style from "../obras-reformas/page.module.css";
import Image from "next/image";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
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
          <ul
            style={{
              listStyle: "none",
              fontFamily: "Ubuntu",
              fontWeight: "400",
              lineHeight: "25px",
              padding: "0px",
            }}
          >
            <li>- Tratamientos rápidos, eficaces y exhaustivos.</li>
            <li>
              - Control de insectos, control de roedores, monitoreo y
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
          <Image
            src="/imgs/control-de-plagas2.jpeg"
            width={320}
            height={400}
            alt="pic"
            style={{
              borderRadius: "2px",
              backgroundSize: "cover",
              position: "center",
            }}
            placeholder="blur"
            blurDataURL={"/imgs/control-de-plagas2.jpeg"}
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

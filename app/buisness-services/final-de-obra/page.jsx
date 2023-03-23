import Header from "../../../src/header";
import Footer from "../../../src/footer";
import style from "../../person-services/obras-reformas/page.module.css";
import Image from "next/image";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import OurTeam from "../../../src/ourTeam/page";

export default function Obras() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1> Obras y refacciones </h1>
          <p>
            Realizamos el diseño, construcción, mantenimiento y refacción de
            comercios y/0 viviendas
          </p>
          <p>
            Nos encargamos de todos los rubros que conforman una obra,con esto
            se logra facilitar el desarrollo y gerenciamiento del proyecto{" "}
          </p>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/NoDisponible.png"
            alt="pic"
            width={200}
            height={300}
            className={style.img}
          />
          <Image
            src="/imgs/NoDisponible.png"
            alt="pic"
            width={200}
            height={300}
            className={style.img}
          />
          <Image
            src="/imgs/NoDisponible.png"
            alt="pic"
            width={200}
            height={300}
            className={style.img}
          />
          <Image
            src="/imgs/NoDisponible.png"
            alt="pic"
            width={200}
            height={300}
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

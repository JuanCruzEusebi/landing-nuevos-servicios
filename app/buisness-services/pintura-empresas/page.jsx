import Header from "../../../src/header";
import Footer from "../../../src/footer";
import style from "../../person-services/pintura/page.module.css";
import OurTeam from "../../../src/ourTeam/page";
import Image from "next/image";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";

export default function PinturaEmpresas() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1>Servicio premiun de Pintura Interior / Exterior</h1>
          <div>
            <p>
              Nuevos servicios ofrece trabajos de pintura interior y pintura
              exterior.
            </p>
            <p>
              Es posible decorar las paredes y techos de un hogar, oficina o
              negocio dándole color al mismo tiempo que se los protege. Desde
              nuestra empresa, escuchamos y asesoramos a los clientes para
              realizar el mejor trabajo.
            </p>
            <p>
              En una primera instancia nuestros pintores realizarán una visita
              para mirar el espacio en el que se trabajará y ultimar detalles
              sobre cómo se procederá. En cuanto al trabajo a realizar, colores
              a aplicar y tipo de pintura que sea más adecuada para los espacios
              en los que se realizará el servicio de pintura interior o
              exterior.
            </p>
          </div>
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

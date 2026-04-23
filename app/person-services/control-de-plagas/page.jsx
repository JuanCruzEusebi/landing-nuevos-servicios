import Header from "../../../src/header";
import Footer from "../../../src/footer";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import OurTeam from "../../../src/ourTeam/page";
import Image from "next/image";
import style from "../../../src/shared/detailPage.module.css";

export default function ControlDePlagas() {
  return (
    <>
      <Header />

      <div
        className={style.hero}
        style={{ backgroundImage: "url('/imgs/control-de-plagas1.jpeg')" }}
      >
        <div className={style.heroContent}>
          <span className={style.heroLabel}>Servicios en Hogares</span>
          <h1 className={style.heroTitle}>Control de Plagas</h1>
          <p className={style.heroSub}>
            Tratamientos rápidos y eficaces para la protección de tu hogar,
            con soluciones personalizadas para cada situación.
          </p>
        </div>
      </div>

      <section className={style.contentSection}>
        <div className={style.inner}>
          <div className={style.textSide}>
            <span className={style.label}>Descripción del servicio</span>
            <h2 className={style.heading}>Servicio integral de control de plagas</h2>
            <p className={style.description}>
              Contamos con tratamientos rápidos, eficaces y exhaustivos.
              Nuestros servicios abarcan el control de insectos, roedores,
              monitoreo y certificaciones, siempre utilizando productos
              aprobados y seguros para el hogar.
            </p>
            <ul className={style.list}>
              <li>Control y eliminación de insectos y roedores</li>
              <li>Desinfección y desinfestación de ambientes</li>
              <li>Monitoreo preventivo periódico</li>
              <li>Certificaciones sanitarias</li>
            </ul>
          </div>
          <div className={style.imageGrid}>
            <Image src="/imgs/fumi1.jpg" alt="Control de plagas 1" width={400} height={300} className={style.img} />
            <Image src="/imgs/fumi2.jpg" alt="Control de plagas 2" width={400} height={300} className={style.img} />
            <Image src="/imgs/fumi3.jpg" alt="Control de plagas 3" width={400} height={300} className={style.img} />
            <Image src="/imgs/fumi4.jpg" alt="Control de plagas 4" width={400} height={300} className={style.img} />
          </div>
        </div>
      </section>

      <OurTeam />
      <PersonServices />
      <BuisnessServices />
      <Footer />
    </>
  );
}

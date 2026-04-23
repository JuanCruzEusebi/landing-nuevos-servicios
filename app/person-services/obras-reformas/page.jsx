import Header from "../../../src/header";
import Footer from "../../../src/footer";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import OurTeam from "../../../src/ourTeam/page";
import Image from "next/image";
import style from "../../../src/shared/detailPage.module.css";

export default function Obras() {
  return (
    <>
      <Header />

      <div
        className={style.hero}
        style={{ backgroundImage: "url('/imgs/obras.jpeg')" }}
      >
        <div className={style.heroContent}>
          <span className={style.heroLabel}>Servicios en Hogares</span>
          <h1 className={style.heroTitle}>Obras y Refacciones</h1>
          <p className={style.heroSub}>
            Diseño, construcción y reforma de viviendas con equipos
            especializados para cada rubro de la obra.
          </p>
        </div>
      </div>

      <section className={style.contentSection}>
        <div className={style.inner}>
          <div className={style.textSide}>
            <span className={style.label}>Descripción del servicio</span>
            <h2 className={style.heading}>Obras y refacciones integrales</h2>
            <p className={style.description}>
              Nos encargamos de todos los rubros que conforman una obra,
              facilitando el desarrollo y gerenciamiento del proyecto desde
              el diseño hasta la entrega final. Trabajamos con viviendas,
              oficinas y locales comerciales.
            </p>
            <ul className={style.list}>
              <li>Refacción y remodelación de ambientes</li>
              <li>Trabajos de albañilería y mampostería</li>
              <li>Instalaciones sanitarias y eléctricas</li>
              <li>Gestión integral del proyecto</li>
            </ul>
          </div>
          <div className={style.imageGrid}>
            <Image src="/imgs/obras-ant.jpg" alt="Antes de la obra" width={400} height={300} className={style.img} />
            <Image src="/imgs/obras-desp.jpg" alt="Después de la obra" width={400} height={300} className={style.img} />
            <Image src="/imgs/obras.jpeg" alt="Obra en proceso" width={400} height={300} className={style.img} />
            <Image src="/imgs/obras-empresas.jpeg" alt="Refacción comercial" width={400} height={300} className={style.img} />
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

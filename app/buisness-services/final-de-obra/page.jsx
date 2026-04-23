import Header from "../../../src/header";
import Footer from "../../../src/footer";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import OurTeam from "../../../src/ourTeam/page";
import Image from "next/image";
import style from "../../../src/shared/detailPage.module.css";

export default function ObrasFinalEmpresas() {
  return (
    <>
      <Header />

      <div
        className={style.hero}
        style={{ backgroundImage: "url('/imgs/obras-empresas.jpeg')" }}
      >
        <div className={style.heroContent}>
          <span className={style.heroLabel}>Servicios Empresariales</span>
          <h1 className={style.heroTitle}>Obras y Refacciones</h1>
          <p className={style.heroSub}>
            Diseño, construcción y reforma de espacios comerciales con
            gestión integral del proyecto de principio a fin.
          </p>
        </div>
      </div>

      <section className={style.contentSection}>
        <div className={style.inner}>
          <div className={style.textSide}>
            <span className={style.label}>Descripción del servicio</span>
            <h2 className={style.heading}>Obras integrales para empresas</h2>
            <p className={style.description}>
              Nos encargamos de todos los rubros que conforman una obra
              comercial, facilitando el desarrollo y gerenciamiento del
              proyecto desde el diseño hasta la entrega final. Trabajamos
              con oficinas, locales y plantas industriales.
            </p>
            <ul className={style.list}>
              <li>Refacción y remodelación de espacios comerciales</li>
              <li>Albañilería, mampostería e instalaciones</li>
              <li>Adecuación de locales a normativas vigentes</li>
              <li>Gestión integral y coordinación de subcontratistas</li>
            </ul>
          </div>
          <div className={style.imageGrid}>
            <Image src="/imgs/obras-ant.jpg" alt="Antes de la obra" width={400} height={300} className={style.img} />
            <Image src="/imgs/obras-desp.jpg" alt="Después de la obra" width={400} height={300} className={style.img} />
            <Image src="/imgs/obras-empresas.jpeg" alt="Obra empresarial" width={400} height={300} className={style.img} />
            <Image src="/imgs/obras-emp1.jpeg" alt="Refacción comercial" width={400} height={300} className={style.img} />
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

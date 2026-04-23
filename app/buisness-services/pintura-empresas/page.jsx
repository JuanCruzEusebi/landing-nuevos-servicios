import Header from "../../../src/header";
import Footer from "../../../src/footer";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import OurTeam from "../../../src/ourTeam/page";
import Image from "next/image";
import style from "../../../src/shared/detailPage.module.css";

export default function PinturaEmpresas() {
  return (
    <>
      <Header />

      <div
        className={style.hero}
        style={{ backgroundImage: "url('/imgs/pintura-home.jpeg')" }}
      >
        <div className={style.heroContent}>
          <span className={style.heroLabel}>Servicios Empresariales</span>
          <h1 className={style.heroTitle}>Pintura Interior y Exterior</h1>
          <p className={style.heroSub}>
            Acabados profesionales para oficinas, locales y edificios
            comerciales, con asesoramiento personalizado en colores y materiales.
          </p>
        </div>
      </div>

      <section className={style.contentSection}>
        <div className={style.inner}>
          <div className={style.textSide}>
            <span className={style.label}>Descripción del servicio</span>
            <h2 className={style.heading}>Pintura corporativa de alto estándar</h2>
            <p className={style.description}>
              Ofrecemos trabajos de pintura interior y exterior para oficinas,
              comercios y edificios. Nuestro equipo realiza una visita previa
              para asesorar sobre colores, tipos de pintura y metodología,
              garantizando el mejor resultado con mínima interrupción operativa.
            </p>
            <ul className={style.list}>
              <li>Pintura de oficinas, locales y depósitos</li>
              <li>Asesoramiento en imagen corporativa y paleta de colores</li>
              <li>Preparación y reparación de superficies</li>
              <li>Acabados especiales, texturados y señalética</li>
            </ul>
          </div>
          <div className={style.imageGrid}>
            <Image src="/imgs/pintura-antes.jpg" alt="Antes de pintura" width={400} height={300} className={style.img} />
            <Image src="/imgs/pintura-desp.jpg" alt="Después de pintura" width={400} height={300} className={style.img} />
            <Image src="/imgs/pintura-home.jpeg" alt="Pintura interior" width={400} height={300} className={style.img} />
            <Image src="/imgs/pintura-despues.jpeg" alt="Resultado final" width={400} height={300} className={style.img} />
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

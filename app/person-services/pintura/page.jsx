import Header from "../../../src/header";
import Footer from "../../../src/footer";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import OurTeam from "../../../src/ourTeam/page";
import Image from "next/image";
import style from "../../../src/shared/detailPage.module.css";

export default function Pintura() {
  return (
    <>
      <Header />

      <div
        className={style.hero}
        style={{ backgroundImage: "url('/imgs/pintura-despues.jpeg')" }}
      >
        <div className={style.heroContent}>
          <span className={style.heroLabel}>Servicios en Hogares</span>
          <h1 className={style.heroTitle}>Pintura Interior y Exterior</h1>
          <p className={style.heroSub}>
            Acabados profesionales para paredes, techos y fachadas,
            con asesoramiento personalizado en colores y materiales.
          </p>
        </div>
      </div>

      <section className={style.contentSection}>
        <div className={style.inner}>
          <div className={style.textSide}>
            <span className={style.label}>Descripción del servicio</span>
            <h2 className={style.heading}>Servicio premium de pintura</h2>
            <p className={style.description}>
              Ofrecemos trabajos de pintura interior y exterior para hogares,
              oficinas y comercios. Nuestros pintores realizan una visita
              previa para asesorar sobre colores, tipos de pintura y
              metodología de trabajo, garantizando el mejor resultado.
            </p>
            <ul className={style.list}>
              <li>Pintura de interiores y exteriores</li>
              <li>Asesoramiento en paleta de colores y materiales</li>
              <li>Preparación y reparación de superficies</li>
              <li>Acabados especiales y texturados</li>
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

import Header from "../../../src/header";
import Footer from "../../../src/footer";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import OurTeam from "../../../src/ourTeam/page";
import Image from "next/image";
import style from "../../../src/shared/detailPage.module.css";

export default function ControlDePlagasEmpresas() {
  return (
    <>
      <Header />

      <div
        className={style.hero}
        style={{ backgroundImage: "url('/imgs/fumigacion.jpg')" }}
      >
        <div className={style.heroContent}>
          <span className={style.heroLabel}>Servicios Empresariales</span>
          <h1 className={style.heroTitle}>Control de Plagas</h1>
          <p className={style.heroSub}>
            Tratamientos profesionales y certificaciones sanitarias para
            empresas, garantizando ambientes seguros y libres de plagas.
          </p>
        </div>
      </div>

      <section className={style.contentSection}>
        <div className={style.inner}>
          <div className={style.textSide}>
            <span className={style.label}>Descripción del servicio</span>
            <h2 className={style.heading}>Fumigación y control integral para empresas</h2>
            <p className={style.description}>
              Contamos con tratamientos rápidos, eficaces y exhaustivos
              adaptados a cada tipo de empresa. Nuestros servicios abarcan
              el control de insectos, roedores, monitoreo y certificaciones
              sanitarias, utilizando productos aprobados y seguros.
            </p>
            <ul className={style.list}>
              <li>Control y eliminación de insectos y roedores</li>
              <li>Desinfección y desinfestación de instalaciones</li>
              <li>Monitoreo preventivo periódico</li>
              <li>Certificaciones sanitarias para comercios</li>
            </ul>
          </div>
          <div className={style.imageGrid}>
            <Image src="/imgs/fumi-emp-1.jpg" alt="Fumigación empresas 1" width={400} height={300} className={style.img} />
            <Image src="/imgs/fumi-emp-2.jpg" alt="Fumigación empresas 2" width={400} height={300} className={style.img} />
            <Image src="/imgs/fumi-emp-3.jpg" alt="Fumigación empresas 3" width={400} height={300} className={style.img} />
            <Image src="/imgs/fumi-emp-4.jpg" alt="Fumigación empresas 4" width={400} height={300} className={style.img} />
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

import Header from "../../../src/header";
import Footer from "../../../src/footer";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import OurTeam from "../../../src/ourTeam/page";
import Vidrios from "../../../src/home/components/buisnessServices/components/vidrios/page";
import FinalDeObra from "../../../src/home/components/buisnessServices/components/final-de-obra/page";
import Pisos from "../../../src/home/components/buisnessServices/components/pisos/page";
import style from "../../../src/shared/detailPage.module.css";

export default function LimpiezaEmpresas() {
  return (
    <>
      <Header />

      <div
        className={style.hero}
        style={{ backgroundImage: "url('/imgs/limpieza-emp.jpeg')" }}
      >
        <div className={style.heroContent}>
          <span className={style.heroLabel}>Servicios Empresariales</span>
          <h1 className={style.heroTitle}>Limpieza Profesional</h1>
          <p className={style.heroSub}>
            Servicios integrales de limpieza corporativa con programas
            diseñados a medida para oficinas, comercios e industrias.
          </p>
        </div>
      </div>

      <Vidrios />
      <FinalDeObra />
      <Pisos />
      <OurTeam />
      <PersonServices />
      <BuisnessServices />
      <Footer />
    </>
  );
}

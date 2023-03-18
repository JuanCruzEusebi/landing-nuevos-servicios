import Header from "../../../src/header";
import Footer from "../../../src/footer";
import style from "../obras-reformas/page.module.css";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import Vidrios from "../../../src/home/components/vidrios/page";
import FinalDeObra from "../../../src/home/components/final-de-obra/page";
import Pisos from "../../../src/home/components/pisos/page";

export default function LimpiezaProfesional() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <div className={style.vidriosContainer}>
            <Vidrios></Vidrios>
          </div>
          <div className={style.finalDeObraContainer}>
            <FinalDeObra></FinalDeObra>
          </div>
          <div className={style.pisosContainer}>
            <Pisos></Pisos>{" "}
          </div>
        </div>
      </article>
      <PersonServices></PersonServices>
      <BuisnessServices></BuisnessServices>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
}

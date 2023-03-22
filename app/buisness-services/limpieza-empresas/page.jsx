import Header from "../../../src/header";
import Footer from "../../../src/footer";
import style from "../../person-services/obras-reformas/page.module.css";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";
import Vidrios from "../../../src/home/components/buisnessServices/components/vidrios/page";
import FinalDeObra from "../../../src/home/components//buisnessServices/components/final-de-obra/page";
import Pisos from "../../../src/home/components/buisnessServices/components/pisos/page";
import OurTeam from "../../../src/ourTeam/page";

export default function LimpiezaEmpresas() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <div>
            <Vidrios></Vidrios>
          </div>
          <div>
            <FinalDeObra></FinalDeObra>
          </div>
          <div>
            <Pisos></Pisos>
          </div>
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

import Header from "@/src/headerapp";
import Footer from "@/src/footerapp";
import style from "../vidrios/page.module.css";

import Image from "next/image";
import PersonServices from "../../../src/home/components/personServices";
import BuisnessServices from "../../../src/home/components/buisnessServices";

export default function FinalDeObra() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1>Final de Obra</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit
            quia debitis reprehenderit odio asperiores tempore officia! Eligendi
            voluptatem excepturi ea explicabo aspernatur, quas libero nesciunt
            sit similique, voluptatum pariatur.
          </p>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            width={200}
            height={200}
          />
          <Image
            src="/imgs/finaldeobra.jpg"
            width={200}
            height={200}
            alt="pic"
          />
          <Image
            src="/imgs/finaldeobra.jpg"
            width={400}
            height={200}
            alt="pic"
          />
        </div>
      </article>
      <BuisnessServices></BuisnessServices>

      <PersonServices></PersonServices>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
}

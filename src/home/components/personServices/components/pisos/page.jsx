import style from "../../../../../../app/person-services/obras-reformas/page.module.css";
import Image from "next/image";

export default function Pisos() {
  return (
    <section>
      <article className={style.pisosContainer}>
        <div className={style.descriptionContainer}>
          <h1>Tratamiento de Pisos</h1>
          <ul
            style={{
              listStyle: "none",
              fontFamily: "Raleway",
              padding: "10px",
            }}
          >
            <li style={{ fontSize: "1.5em", marginBottom: "15px" }}>
              - Abrillantado de pisos
            </li>
            <li style={{ fontSize: "1.5em", marginBottom: "15px" }}>
              - Limpiezas de alfombras
            </li>
            <li style={{ fontSize: "1.5em", marginBottom: "15px" }}>
              - Limpieza de eventos especiales
            </li>
          </ul>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={"/imgs/desinfeccion.jpg"}
          />
        </div>
      </article>
    </section>
  );
}

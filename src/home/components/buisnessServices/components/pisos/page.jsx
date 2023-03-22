import style from "../../../personServices/components/pisos/page.module.css";
import Image from "next/image";

export default function Pisos() {
  return (
    <section>
      <article className={style.mainContainer}>
        <div className={style.descriptionContainer}>
          <h1>Tratamiento de Pisos</h1>
          <ul
            style={{
              listStyle: "none",
              fontFamily: "Raleway",
              padding: "10px",
            }}
          >
            <li style={{ fontSize: "1.2em", marginBottom: "15px" }}>
              - Abrillantado de pisos
            </li>
            <li style={{ fontSize: "1.2em", marginBottom: "15px" }}>
              - Limpiezas de alfombras
            </li>
            <li style={{ fontSize: "1.2em", marginBottom: "15px" }}>
              - Limpieza de eventos especiales
            </li>
          </ul>
        </div>
        <div className={style.imagesContainer}>
          <Image
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            width={200}
            height={300}
            className={style.img}
          />
          <Image
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            width={200}
            className={style.img}
            height={300}
          />
          <Image
            src="/imgs/desinfeccion.jpg"
            alt="pic"
            className={style.img}
            width={200}
            height={300}
          />
          <Image
            src="/imgs/desinfeccion.jpg"
            className={style.img}
            alt="pic"
            width={200}
            height={300}
          />
        </div>
      </article>
    </section>
  );
}

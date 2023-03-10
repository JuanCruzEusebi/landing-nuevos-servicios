import { Work_Sans, Ubuntu } from "next/font/google";
import styles from "./page.module.css";

const font = Work_Sans({
  subsets: ["latin"],
  variable: "--heading-font",
});

const fontTwo = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <section className={styles.bodyContainer} id="home">
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>SERVICIOS DE LIMPIEZA</h1>
        <p
          className={fontTwo.className}
          style={{
            color: "#163583",
            fontSize: "1.2em",
            textAlign: "center",
            letterSpacing: "2px",
            fontWeight: "400",
            textTransform: "uppercase",
            fontStyle: "oblique",
          }}
        >
          Mantenimiento integral de oficinas, clincias, locales comerciales e
          industrias
        </p>
        <button className={styles.mainButton} id="contactButton">
          PEDI HOY TU PRESUPUESTO!
        </button>
      </div>
    </section>
  );
}

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
    <section className={styles.bodyContainer}>
      <div className={styles.mainContainer}>
        <h1
          className={fontTwo.className}
          style={{
            color: "#163583",
            fontSize: "2.4em",
            fontWeight: "800",
            letterSpacing: "15px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          SERVICIOS DE LIMPIEZA
        </h1>
        <p
          className={fontTwo.className}
          style={{
            color: "#163583",
            fontSize: "1.2em",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Mantenimiento integral de oficinas, clincias, locales comerciales e
          industrias
        </p>
        <button
          className={fontTwo.className}
          style={{
            backgroundColor: "#163583",
            color: "white",
            width: "500px",
            border: "none",
            height: "45px",
            borderRadius: "25px",
            marginTop: "15px",
            fontSize: "1em",
          }}
        >
          PEDI HOY TU PRESUPUESTO!
        </button>
      </div>
    </section>
  );
}

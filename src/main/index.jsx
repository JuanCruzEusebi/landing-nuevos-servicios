import styles from "./servicesDisplay.module.css";

export default function ServicesDisplay() {
  return (
    <div className={styles.bodyContainer} id="home">
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>SERVICIOS DE LIMPIEZA</h1>
        <p className={styles.paragraph}>
          Mantenimiento integral de oficinas, Clínicas , locales comerciales e
          industrias
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.mainButton}>
            <a href="#servicios">Servicios en Domicilio</a>
          </button>
          <button className={styles.mainButton}>
            <a href="#servEmp">Servicios Empresariales</a>
          </button>
        </div>
      </div>
    </div>
  );
}

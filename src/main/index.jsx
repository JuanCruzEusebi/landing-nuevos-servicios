import styles from "./servicesDisplay.module.css";

export default function ServicesDisplay() {
  return (
    <div className={styles.bodyContainer} id="home">
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>NUEVOS SERVICIOS</h1>
        <p className={styles.paragraph}>
          Servicios de limpieza y mantenimiento integral
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.mainButton}>
            <a href="#servicios">EN DOMICILIO</a>
          </button>
          <button className={styles.mainButton}>
            <a href="#servEmp">PARA EMPRESAS</a>
          </button>
        </div>
      </div>
    </div>
  );
}

import styles from "./servicesDisplay.module.css";

export default function ServicesDisplay() {
  return (
    <div className={styles.bodyContainer} id="home">
      <div className={styles.mainContainer}>
        <span className={styles.eyebrow}>
          Limpieza · Mantenimiento · Profesional
        </span>
        <h1 className={styles.heading}>
          Nuevos
          <span className={styles.headingLight}>Servicios.</span>
        </h1>
        <p className={styles.paragraph}>
          Soluciones integrales para hogares y empresas.
          <br />Más de 10 años brindando calidad y confianza.
        </p>
        <div className={styles.buttonContainer}>
          <a href="#servicios" className={styles.btnPrimary}>
            Servicios en Hogar
          </a>
          <a href="#servEmp" className={styles.btnSecondary}>
            Para Empresas →
          </a>
        </div>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>10+</span>
          <span className={styles.statLabel}>Años de experiencia</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNumber}>500+</span>
          <span className={styles.statLabel}>Clientes satisfechos</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <span className={styles.statNumber}>8</span>
          <span className={styles.statLabel}>Servicios especializados</span>
        </div>
      </div>
    </div>
  );
}

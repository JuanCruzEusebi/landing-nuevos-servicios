import Image from "next/image";
import style from "../../../personServices/components/vidrios/page.module.css";

export default function Vidrios() {
  return (
    <section className={style.mainContainer}>
      <div className={style.inner}>
        <div className={style.descriptionContainer}>
          <span className={style.label}>Servicio empresarial</span>
          <h1>Limpieza de Vidrios en Altura</h1>
          <ul className={style.list}>
            <li>Trabajos en altura con arneses y equipamiento certificado</li>
            <li>Limpieza de fachadas y cortinas de vidrio</li>
            <li>Personal capacitado y asegurado</li>
            <li>Cronogramas de mantenimiento a medida</li>
          </ul>
        </div>
        <div className={style.imagesContainer}>
          <Image src="/imgs/vidrios-emp.jpg" alt="Vidrios empresa 1" width={400} height={300} className={style.img} />
          <Image src="/imgs/vidrios-emp2.jpg" alt="Vidrios empresa 2" width={400} height={300} className={style.img} />
          <Image src="/imgs/vidrios-emp3.jpg" alt="Vidrios empresa 3" width={400} height={300} className={style.img} />
          <Image src="/imgs/limpieza-emp.jpeg" alt="Limpieza empresa" width={400} height={300} className={style.img} />
        </div>
      </div>
    </section>
  );
}

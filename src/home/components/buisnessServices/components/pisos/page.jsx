import style from "../../../personServices/components/pisos/page.module.css";
import Image from "next/image";

export default function Pisos() {
  return (
    <section className={style.mainContainer}>
      <div className={style.inner}>
        <div className={style.imagesContainer}>
          <Image src="/imgs/piso.jpg" alt="Tratamiento de pisos" width={400} height={300} className={style.img} />
          <Image src="/imgs/tapizados.jpg" alt="Tapizados" width={400} height={300} className={style.img} />
          <Image src="/imgs/limpieza-emp.jpeg" alt="Limpieza empresarial" width={400} height={300} className={style.img} />
          <Image src="/imgs/obras-empresas.jpeg" alt="Obras empresas" width={400} height={300} className={style.img} />
        </div>
        <div className={style.descriptionContainer}>
          <span className={style.label}>Servicio empresarial</span>
          <h1>Tratamiento de Pisos</h1>
          <ul className={style.list}>
            <li>Abrillantado industrial de pisos y superficies</li>
            <li>Limpieza y tratamiento de alfombras corporativas</li>
            <li>Sellado y protección de pisos de alto tráfico</li>
            <li>Mantenimiento periódico programado</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import style from "../../../personServices/components/final-de-obra/page.module.css";
import Image from "next/image";

export default function FinalDeObra() {
  return (
    <section className={style.mainContainer}>
      <div className={style.inner}>
        <div className={style.descriptionContainer}>
          <span className={style.label}>Servicio empresarial</span>
          <h1>Limpieza Final de Obra</h1>
          <ul className={style.list}>
            <li>Limpieza integral post-construcción en comercios e industrias</li>
            <li>Retiro de residuos y materiales sobrantes</li>
            <li>Pulido y limpieza de pisos y superficies</li>
            <li>Entrega del espacio listo para su uso</li>
          </ul>
        </div>
        <div className={style.imagesContainer}>
          <Image src="/imgs/obras-emp1.jpeg" alt="Final de obra 1" width={400} height={300} className={style.img} />
          <Image src="/imgs/obras-emp-2.jpeg" alt="Final de obra 2" width={400} height={300} className={style.img} />
          <Image src="/imgs/obras-emp-3.jpeg" alt="Final de obra 3" width={400} height={300} className={style.img} />
          <Image src="/imgs/obras-empresas.jpeg" alt="Final de obra 4" width={400} height={300} className={style.img} />
        </div>
      </div>
    </section>
  );
}

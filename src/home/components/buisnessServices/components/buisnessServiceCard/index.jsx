"use client";
import style from "./page.module.css";
import Link from "next/link";

export default function BuisnessServiceCard({ data }) {
  return (
    <div className={style.grid}>
      {data.map((item, index) => (
        <div key={index} className={style.card}>
          <div
            className={style.cardBg}
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className={style.overlay}>
            <span className={style.number}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className={style.cardContent}>
              <h2 className={style.heading}>{item.title}</h2>
              <Link
                className={style.link}
                href={`buisness-services/${item.route}`}
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

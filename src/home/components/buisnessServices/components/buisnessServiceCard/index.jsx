"use client";
import style from "./buisnessServiceCard.module.css";
import Link from "next/link";

export default function BuisnessServiceCard({ data }) {
  function handleCardHover(e) {
    const para = e.currentTarget.querySelector(`.${style.para}`);
    para.style.height = "30em";
    // para.style. = "850em";
  }

  function handleCardLeave(e) {
    const para = e.currentTarget.querySelector(`.${style.para}`);
    para.style.height = "";
  }

  return (
    <div className={style.mainContainer}>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={style.card}
            style={{ backgroundImage: `url(${item.image})` }}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <h1 className={style.heading}> {item.title}</h1>
            <p className={style.para}>
              {item.title} <br />
              <br />
              <br />
              <br />
              <Link
                style={{
                  color: "whitesmoke",
                  textDecoration: "none",
                  fontSize: "1.1em",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  padding: "10px 20px 10px 20px",
                  border: "1px solid white",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
                href={`buisness-services/${item.route}`}
                as={`buisness-services/${item.route}`}
              >
                Ver mas...
              </Link>
              <br />
              <br />
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
}

"use client";
import style from "./buisnessServiceCard.module.css";
import Link from "next/link";

export default function BuisnessServiceCard({ data }) {
  function handleCardHover(e) {
    const para = e.currentTarget.querySelector(`.${style.para}`);
    para.style.height = "850em";
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
          // <Link
          //   style={{ color: "white", textDecoration: "none" }}
          //   data={item}
          //   href={`buisness-services/${item.route}`}
          //   as={`buisness-services/${item.route}`}
          //   key={item.id}
          // >
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
              {item.about}
              <br />
              <br />
              <br />
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1em",
                  fontWeight: "300",
                  letterSpacing: "2px",
                  padding: "10px 10px 10px 10px",
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
          // </Link>
        );
      })}
    </div>
  );
}

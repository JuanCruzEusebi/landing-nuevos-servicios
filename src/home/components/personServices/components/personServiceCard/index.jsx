"use client";
import style from "./personServiceCard.module.css";
import Link from "next/link";

export default function PersonServiceCard({ data }) {
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
          <Link
            style={{ color: "white", textDecoration: "none" }}
            data={item}
            // href={`servEmp/[id]`} ----------> esta es la ruta
            // as={`servEmp/${item.route}`}
            href={""}
            key={item.heading}
          >
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                esse voluptates fugiat iure corrupti quia corporis excepturi
                dolore nisi, veritatis, quo asperiores. Eos, qui est?
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
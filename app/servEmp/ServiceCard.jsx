import style from "../servEmp/newServCard.module.css";
import Link from "next/link";

export default function ServiceCard({ data }) {
  return (
    <div className={style.mainContainer}>
      {data.map((item, index) => {
        return (
          <Link href={`servEmp/[id]`} as={`servEmp/${item.route}`}>
            <div
              key={index}
              className={style.card}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h1 className={style.heading}> {item.title}</h1>
              <p className={style.para}>{item.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

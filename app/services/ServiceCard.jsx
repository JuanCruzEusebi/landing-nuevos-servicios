import style from "../services/card.module.css";

export default function ServiceCard({ data }) {
  return (
    <div className={style.mainContainer}>
      {data.map((item, index) => {
        return (
          <div key={index} className={style.card}>
            <img src={item.image} alt="img" as={index} className={style.img} />
            <h1 className={style.heading}> {item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

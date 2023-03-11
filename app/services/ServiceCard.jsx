import style from "../services/card.module.css";

export default function ServiceCard({ data }) {
  return (
    <div className={style.mainContainer}>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={style.card}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* <img src={item.image} alt="img" as={index} className={style.img} /> */}
            <h1 className={style.heading}> {item.title}</h1>
            <h2 className={style.para}>{item.title} </h2>
          </div>
        );
      })}
    </div>
  );
}

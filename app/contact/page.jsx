import style from "./page.module.css";

export default function Contact() {
  return (
    <div className={style.mainContainer} id="contacto">
      <div className={style.emailContainer}>
        <input type="text" />
        <input type="text" />
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <button>submit</button>
      </div>
    </div>
  );
}

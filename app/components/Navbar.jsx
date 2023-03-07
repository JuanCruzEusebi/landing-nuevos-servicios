// import Link from "next/link";
import { Ubuntu } from "next/font/google";
import styles from "./navbar.module.css";

const fontTwo = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Servicios",
    route: "#servicios",
  },
  {
    label: "Sobre Nosotros",
    route: "#sobre-nos",
  },
  {
    label: "Contacto",
    route: "#contacto",
  },
];

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.headContainer}>
        <h1
          style={{
            fontWeight: "400",
          }}
        >
          BRAND
        </h1>
      </div>
      <div className={styles.linksContainer}>
        <nav>
          <ul className={styles.links}>
            {links.map(({ label, route }) => {
              return (
                <li key={route}>
                  <a as={route} className={styles.linkTag} href={route}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </nav>
  );
}

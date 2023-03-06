import Link from "next/link";
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
    route: "/about",
  },
  {
    label: "Sobre Nosotros",
    route: "/posts",
  },
  {
    label: "Contacto",
    route: "/contact",
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
                  <Link className={styles.linkTag} href={route}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </nav>
  );
}

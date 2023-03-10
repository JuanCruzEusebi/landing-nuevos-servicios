// import Link from "next/link";
import { Ubuntu } from "next/font/google";
import styles from "./navbar.module.css";

const fontTwo = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const links = [
  {
    label: "INICIO",
    route: "/",
  },
  {
    label: "SERVICIOS",
    route: "#servicios",
  },
  {
    label: "SOBRE NOSOTROS",
    route: "#sobre-nos",
  },
  {
    label: "CONTACTO",
    route: "#contacto",
  },
];

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.headContainer}>
        <h1 className={styles.headingOne}>nuevos </h1>
        <h1 className={styles.headingTwo}> servicios</h1>
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
        <div className={styles.hambMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width={"50px"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

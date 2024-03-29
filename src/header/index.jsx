"use client";
import styles from "./header.module.css";
import { useState } from "react";
import Link from "next/link";

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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navContainer}>
      <div className={styles.headContainer}>
        <Link
          href={"/"}
          as={"/"}
          style={{ textDecoration: "none", display: "flex", color: "black" }}
        >
          <h1 className={styles.headingOne}>nuevos </h1>
          <h1 className={styles.headingTwo}> servicios</h1>
        </Link>
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
        <div
          className={`${styles.hambMenu} ${menuOpen ? styles.close : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            width={"30px"}
            color={"white"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M3 3L21 21M3 21l18-18"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </div>
        <div
          style={{
            backgroundColor: "#163583",
          }}
          className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}
        >
          <ul className={styles.mobileLinks}>
            {" "}
            {links.map(({ label, route }) => {
              return (
                <li key={route}>
                  <a
                    as={route}
                    className={styles.linkTag}
                    style={{ color: "white" }}
                    href={route}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import style from "./contact.module.css";

export default function ContactButton() {
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    const email = query?.email || "juanirodriguez@nuevosservicios.com.ar";

    const handleContactOwner = (e) => {
      e.preventDefault();
      console.log("Contacting owner:", email);
      const subject = encodeURIComponent("CONSULTA");
      const options = "width=200,height=300,resizable,scrollbars";
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&subject=${subject}`,
        "_blank"
      );
    };

    const contactButton = document.querySelector("#contactButton");
    contactButton.addEventListener("click", handleContactOwner);

    // Clean up the event listener when the component unmounts
    return () => {
      contactButton.removeEventListener("click", handleContactOwner);
    };
  }, [router]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a
        className={style.contactEmail}
        style={{
          backgroundColor: "#27BD2D",
          color: "white",
          border: "none",
          width: "auto",
          padding: "7px 12px 7px 12px",
          fontSize: "0.7em",
          borderRadius: "5px",
          cursor: "pointer",
          boxSizing: "border-box",
          textDecoration: "none",
          fontFamily: "Raleway",
          marginBottom: "20px",
          textAlign: "center",
        }}
        href="https://api.whatsapp.com/send?phone=1150967779&text=Hola%20!"
      >
        Contactanos via WhatsApp
      </a>
      <button
        className={style.contactButton}
        id="contactButton"
        style={{
          backgroundColor: "#27BD2D",
          color: "white",
          border: "none",
          width: "auto",
          padding: "7px 12px 7px 12px",
          fontSize: "0.7em",
          borderRadius: "5px",
          cursor: "pointer",
          boxSizing: "border-box",
          fontFamily: "Raleway",
        }}
      >
        Contactanos via mail
      </button>
    </div>
  );
}

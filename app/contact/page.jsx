"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactButton() {
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    const email = query?.email || "juancruzeusebi@gmail.com";

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

  return <button id="contactButton">Contact Owner</button>;
}

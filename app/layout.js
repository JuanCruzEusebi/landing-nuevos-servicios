import "./globals.css";
import Navbar from "./components/Navbar";
import AboutUs from "./aboutUs/page";
import Services from "./services/page";
import Contact from "./contact/page";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Cleaning Services</title>
      </head>
      <body>
        <Navbar />
        {children}
        <AboutUs />
        <Services />
        <footer>
          <Contact />
        </footer>
      </body>
    </html>
  );
}

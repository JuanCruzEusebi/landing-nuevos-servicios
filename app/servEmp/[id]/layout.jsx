// import Navbar from "./components/Navbar";
// import Footer from "./footer/page";

export default function ServiceLayout({ children }) {
  return (
    <html>
      <head>
        <title>Nuevos Servicios</title>
      </head>
      <body>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}

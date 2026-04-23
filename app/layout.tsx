import "../src/home/home.css";
import ScrollToTop from "../src/shared/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

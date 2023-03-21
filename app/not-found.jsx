import Link from "next/link";

const NotFound = () => (
  <div className="centerContainer">
    <h2>No se encontró esta página</h2>
    <Link className="goHome" href="/" as={"/"}>
      <button>Ir a la Home</button>
    </Link>
  </div>
);

export default NotFound;

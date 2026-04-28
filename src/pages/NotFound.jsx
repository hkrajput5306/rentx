import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "60px" }}>404</h1>
      <p>Page not found</p>

      <Link to="/">
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
}
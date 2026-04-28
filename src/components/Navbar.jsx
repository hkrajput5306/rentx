import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav
      className="transparent-glass"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* LOGO */}
      <h2 style={{ fontWeight: "700", color: "#ff6a00" }}>
        RentX
      </h2>

      {/* NAV LINKS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/booking">Booking</Link>

        {/* AUTH PART */}
        {user ? (
          <>
            <span style={{ color: "#ff6a00", fontSize: "14px" }}>
              Hi, {user.name || "User"}
            </span>

            <button className="btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
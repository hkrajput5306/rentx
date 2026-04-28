import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="transparent-glass"
      style={{
        marginTop: "60px",
        padding: "40px 20px"
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px"
        }}
      >
        {/* BRAND */}
        <div>
          <h2 style={{ color: "#ff6a00" }}>RentX</h2>
          <p style={{ marginTop: "10px", color: "#b3b3b3" }}>
            Experience luxury car rentals with premium comfort,
            performance, and style.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4>Company</h4>
          <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <h4>Support</h4>
          <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <Link to="/help">Help Center</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>
          <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <span>Email: support@rentx.com</span>
            <span>Phone: +91 98765 43210</span>
            <span>Location: India</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "15px",
          color: "#888"
        }}
      >
        © {new Date().getFullYear()} RentX. All rights reserved.
      </div>
    </footer>
  );
}
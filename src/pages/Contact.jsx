import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="container fade-up">
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Contact Us
      </h1>

      <div
        className="transparent-glass"
        style={{
          padding: "30px",
          maxWidth: "900px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px"
        }}
      >
        {/* LEFT SIDE - CONTACT INFO */}
        <div>
          <h3>Get in Touch</h3>

          <p style={{ marginTop: "15px" }}>
            <strong>Email:</strong> support@rentx.com
          </p>

          <p style={{ marginTop: "10px" }}>
            <strong>Phone:</strong> +91 98765 43210
          </p>

          {/* 🔥 UPDATED LOCATION */}
          <p style={{ marginTop: "10px" }}>
            <strong>Location:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/Delhi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff6a00", textDecoration: "none" }}
            >
              Delhi, India (View on Map)
            </a>
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "15px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "white"
            }}
          />

          <button className="btn" style={{ width: "100%" }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
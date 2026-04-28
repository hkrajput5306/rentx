import { useState } from "react";
import { useLocation } from "react-router-dom";
import { cars } from "../data/cars";

export default function Booking() {
  const query = new URLSearchParams(useLocation().search);
  const selectedCarId = query.get("car");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    days: "",
    date: "",
    car: selectedCarId || ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed!");
  };

  return (
    <div
      className="container fade-up"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh"
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="transparent-glass"
        style={{
          padding: "30px",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Book Your Car</h2>

        {/* SELECT CAR */}
        <select
          name="car"
          value={form.car}
          onChange={handleChange}
        >
          <option value="">Select Car</option>
          {cars.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        {/* PHONE */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        {/* DAYS */}
        <input
          type="number"
          name="days"
          placeholder="Number of Days"
          value={form.days}
          onChange={handleChange}
        />

        {/* DATE */}
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        {/* BUTTON */}
        <button
          className="btn"
          style={{ width: "100%", marginTop: "10px" }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
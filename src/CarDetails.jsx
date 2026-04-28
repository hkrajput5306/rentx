import { useParams, useNavigate } from "react-router-dom";
import { cars } from "./data/cars";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) return <h2 style={{ padding: "20px" }}>Car not found</h2>;

  return (
    <div className="container fade-up">
      <div
        className="transparent-glass"
        style={{
          padding: "30px",
          maxWidth: "900px",
          margin: "auto"
        }}
      >
        {/* IMAGE */}
        <img
          src={car.image}
          alt={car.name}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        />

        {/* TITLE */}
        <h1>{car.name}</h1>

        {/* BASIC INFO */}
        <p style={{ marginTop: "10px" }}>₹{car.price}/day</p>
        <p>Fuel: {car.fuel}</p>
        <p>Type: {car.type}</p>

        {/* 🔥 NEW DETAILS (THIS WAS MISSING) */}
        <div style={{ marginTop: "20px" }}>
          <p>Mileage: {car.mileage}</p>
          <p>Transmission: {car.transmission}</p>
          <p>Seats: {car.seats}</p>
        </div>

        {/* BUTTON */}
        <button
          className="btn"
          style={{ marginTop: "20px" }}
          onClick={() => navigate(`/booking?car=${car.id}`)}
        >
          Book This Car
        </button>
      </div>
    </div>
  );
}
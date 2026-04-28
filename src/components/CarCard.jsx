import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div
      className="glass fade-up"
      style={{
        overflow: "hidden",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img
        src={car.image}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{car.name}</h3>
        <p style={{ color: "#9ca3af" }}>₹{car.price}/day</p>

        <Link to={`/cars/${car.id}`}>
          <button className="btn" style={{ marginTop: "10px" }}>
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
import { cars } from "../data/cars";
import CarCard from "../components/CarCard";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="container fade-up" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "60px", fontWeight: "700" }}>
          Drive Luxury <br /> Feel Power
        </h1>

        <p style={{ marginTop: "10px", color: "#9ca3af" }}>
          Premium cars at your fingertips
        </p>

        <button className="btn" style={{ marginTop: "20px" }}>
          Explore Cars
        </button>
      </section>

      {/* FEATURED */}
      <section className="container">
        <h2 style={{ marginBottom: "20px" }}>Featured Cars</h2>

        <div className="grid grid-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
}
<Testimonials />
import { useState } from "react";
import { cars } from "../data/cars";
import CarCard from "../components/CarCard";

export default function Cars() {
  const [fuel, setFuel] = useState("All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("");

  let filtered = cars.filter(
    (c) =>
      (fuel === "All" || c.fuel === fuel) &&
      (type === "All" || c.type === type)
  );

  // SORTING
  if (sort === "low") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container fade-up">
      <h2 style={{ marginBottom: "20px" }}>Browse Cars</h2>

      {/* FILTER BAR */}
      <div
        className="transparent-glass"
        style={{
          padding: "15px",
          marginBottom: "25px",
          display: "flex",
          flexWrap: "wrap",
          gap: "15px"
        }}
      >
        {/* FUEL FILTER */}
        <select onChange={(e) => setFuel(e.target.value)}>
          <option value="All">All Fuel</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>

        {/* TYPE FILTER */}
        <select onChange={(e) => setType(e.target.value)}>
          <option value="All">All Type</option>
          <option value="Sports">Sports</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Luxury">Luxury</option>
        </select>

        {/* SORT */}
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* CAR GRID */}
      <div className="grid grid-3">
        {filtered.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
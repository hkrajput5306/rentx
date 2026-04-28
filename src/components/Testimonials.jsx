export default function Testimonials() {
  const reviews = [
    { name: "Rahul", text: "Amazing experience!" },
    { name: "Anjali", text: "Luxury cars at best price." },
    { name: "Aman", text: "Smooth booking and great service." }
  ];

  return (
    <div className="container">
      <h2>What Our Customers Say</h2>

      <div className="grid grid-3" style={{ marginTop: "20px" }}>
        {reviews.map((r, i) => (
          <div key={i} className="glass" style={{ padding: "15px" }}>
            <p>"{r.text}"</p>
            <h4 style={{ marginTop: "10px" }}>- {r.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Luxury Cars to Rent in 2026",
      desc: "Explore the best premium cars for your next trip."
    },
    {
      id: 2,
      title: "Why Electric Cars Are the Future",
      desc: "Tesla and beyond – the future of mobility."
    },
    {
      id: 3,
      title: "How to Choose the Right Rental Car",
      desc: "Tips to pick the perfect car for your needs."
    }
  ];

  return (
    <div className="container fade-up">
      <h1>Our Blog</h1>

      <div className="grid grid-3" style={{ marginTop: "20px" }}>
        {blogs.map((b) => (
          <div key={b.id} className="transparent-glass card-hover" style={{ padding: "20px" }}>
            <h3>{b.title}</h3>
            <p style={{ marginTop: "10px" }}>{b.desc}</p>
            <button className="btn" style={{ marginTop: "10px" }}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
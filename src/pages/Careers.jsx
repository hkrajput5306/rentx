export default function Careers() {
  const jobs = [
    {
      id: 1,
      role: "Fleet Manager",
      location: "Delhi",
      type: "Full Time"
    },
    {
      id: 2,
      role: "Customer Support Executive",
      location: "Remote",
      type: "Full Time"
    },
    {
      id: 3,
      role: "Operations Manager",
      location: "Bangalore",
      type: "Full Time"
    },
    {
      id: 4,
      role: "Sales & Partnerships Executive",
      location: "Mumbai",
      type: "Full Time"
    },
    {
      id: 5,
      role: "Driver Partner",
      location: "Multiple Cities",
      type: "Contract"
    },
    {
      id: 6,
      role: "Vehicle Maintenance Specialist",
      location: "Delhi",
      type: "Full Time"
    }
  ];

  return (
    <div className="container fade-up">
      <h1 style={{ marginBottom: "20px" }}>Careers at RentX</h1>

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px"
        }}
      >
        {jobs.map((job) => (
          <div
            key={job.id}
            className="transparent-glass card-hover"
            style={{ padding: "20px" }}
          >
            <h3>{job.role}</h3>

            <p style={{ color: "#aaa", marginTop: "8px" }}>
              {job.location} • {job.type}
            </p>

            <button
              className="btn"
              style={{ marginTop: "15px" }}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
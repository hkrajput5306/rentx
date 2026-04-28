export default function Terms() {
  return (
    <div className="container fade-up">
      <h1>Terms & Conditions</h1>

      <div className="transparent-glass" style={{ padding: "20px", marginTop: "20px" }}>
        <p>By using RentX, you agree to the following terms:</p>

        <ul style={{ marginTop: "10px" }}>
          <li>Driver must have a valid license.</li>
          <li>Vehicle must be returned on time.</li>
          <li>Damage charges may apply if rules are violated.</li>
          <li>Late returns may incur extra charges.</li>
        </ul>
      </div>
    </div>
  );
}
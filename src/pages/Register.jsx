import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(data);
    navigate("/login");
  };

  return (
    <div className="container" style={{ display: "flex", justifyContent: "center", minHeight: "80vh", alignItems: "center" }}>
      <form className="transparent-glass" style={{ padding: "30px", maxWidth: "400px", width: "100%" }} onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input placeholder="Name" onChange={(e) => setData({ ...data, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setData({ ...data, password: e.target.value })} />

        <button className="btn" style={{ width: "100%" }}>Register</button>
      </form>
    </div>
  );
}
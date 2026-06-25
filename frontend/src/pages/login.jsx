import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("freelancer");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("role", role);
    navigate("/dashboard");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Left Section */}
        <div style={styles.left}>
          <h1 style={styles.brand}>FreelanceHub 🚀</h1>

          <h2 style={styles.tagline}>
            Connect, Collaborate & Grow
          </h2>

          <p style={styles.description}>
            Join thousands of freelancers and clients building amazing
            projects together.
          </p>

          <div style={styles.features}>
            <p>✅ Find exciting freelance opportunities</p>
            <p>✅ Hire talented professionals</p>
            <p>✅ Manage projects efficiently</p>
            <p>✅ Grow your professional network</p>
          </div>
        </div>

        {/* Login Card */}
        <div style={styles.card}>
          <h2>Welcome Back 👋</h2>

          <input
            type="email"
            placeholder="Email Address"
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          >
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
          </select>

          <button
            onClick={handleLogin}
            style={styles.loginBtn}
          >
            Login
          </button>

          <p style={{ marginTop: "15px" }}>
            Don't have an account?
            <a href="/register"> Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #e0f7ff, #f8fdff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  container: {
    display: "flex",
    width: "100%",
    maxWidth: "1100px",
    backgroundColor: "white",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  },

  left: {
    flex: 1,
    padding: "50px",
    background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
    color: "white",
  },

  brand: {
    fontSize: "42px",
    marginBottom: "20px",
  },

  tagline: {
    fontSize: "28px",
  },

  description: {
    marginTop: "20px",
    lineHeight: "1.8",
  },

  features: {
    marginTop: "30px",
    lineHeight: "2",
  },

  card: {
    flex: 1,
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  input: {
    padding: "14px",
    marginTop: "15px",
    borderRadius: "10px",
    border: "1px solid #dbeafe",
    fontSize: "16px",
  },

  loginBtn: {
    marginTop: "20px",
    backgroundColor: "#0ea5e9",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },

  footerText: {
    marginTop: "20px",
    textAlign: "center",
    color: "#64748b",
  },
};

export default Login;
import { useState } from "react";
import axios from "axios";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");

  
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
          role,
        }
      );

      alert(response.data.message);
    } catch (error) {
      console.error(error);

      alert("Registration failed");
    }
  };
  return (
    <div style={styles.container}>
      <h2>Register</h2>

      <form style={styles.form} onSubmit={handleRegister}>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          style={styles.input}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
        </select>

        <button style={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "auto",
    gap: "10px"
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    backgroundColor: "#111",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default Register;
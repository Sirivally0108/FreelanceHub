import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      if (res.data.user.role === "client") {
        navigate("/client-dashboard");
      } else {
        navigate("/freelancer-dashboard");
      }

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.left}>
          <h1 style={styles.brand}>
            FreelanceHub 🚀
          </h1>

          <h2 style={styles.tagline}>
            Connect, Collaborate & Grow
          </h2>

          <p style={styles.description}>
            Join thousands of freelancers and clients.
          </p>
        </div>

        <div style={styles.card}>

          <h2>Welcome Back 👋</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={styles.input}
          />

          <button
            onClick={handleLogin}
            style={styles.loginBtn}
          >
            Login
          </button>

          <p style={{ marginTop: "15px" }}>
            Don't have an account?
            <a href="/register">
              {" "}Register
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

const styles = {
  page:{
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#f0f9ff"
  },
  container:{
    width:"900px",
    display:"flex",
    background:"white",
    borderRadius:"20px",
    overflow:"hidden"
  },
  left:{
    flex:1,
    padding:"40px",
    background:"#0ea5e9",
    color:"white"
  },
  card:{
    flex:1,
    padding:"40px",
    display:"flex",
    flexDirection:"column"
  },
  input:{
    padding:"12px",
    marginTop:"15px"
  },
  loginBtn:{
    marginTop:"20px",
    padding:"12px",
    background:"#0284c7",
    color:"white",
    border:"none",
    cursor:"pointer"
  }
};

export default Login;
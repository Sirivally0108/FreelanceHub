import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>🚀 FreelanceHub</h2>

      <div style={styles.links}>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#0ea5e9",
    color: "white",
    alignItems: "center",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "15px" },
  link: { color: "white", textDecoration: "none" },
};

export default Navbar;
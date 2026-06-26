import { Link } from "react-router-dom";

function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location = "/login";

  };

  return (

    <div style={styles.nav}>

      <h2 style={styles.logo}>🚀 FreelanceHub</h2>

      <div style={styles.links}>

        <Link to="/home" style={styles.link}>Home</Link>

        {user && (
          <>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/projects" style={styles.link}>Projects</Link>

            <button
              onClick={logout}
              style={styles.button}
            >
              Logout
            </button>
          </>
        )}

        {!user && (
          <Link to="/login" style={styles.link}>Login</Link>
        )}

      </div>

    </div>

  );

}

const styles = {

  nav:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"15px 30px",
    background:"#0ea5e9",
    color:"white"
  },

  logo:{
    margin:0
  },

  links:{
    display:"flex",
    gap:"15px",
    alignItems:"center"
  },

  link:{
    color:"white",
    textDecoration:"none"
  },

  button:{
    background:"red",
    color:"white",
    border:"none",
    padding:"8px 15px",
    cursor:"pointer",
    borderRadius:"5px"
  }

};

export default Navbar;
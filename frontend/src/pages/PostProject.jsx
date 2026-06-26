import { useState } from "react";
import axios from "axios";
function PostProject() {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location = "/login";
    return null;
  }

  const clientId = user.user_id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(

  "http://localhost:5000/api/projects",

  {
    title,
    description,
    budget
  },

  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }

);

      alert("Project Posted Successfully");
      window.location="/client-dashboard";

      setTitle("");
      setDescription("");
      setBudget("");

    } catch (err) {
      console.log(err);
      alert("Error posting project");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <h1 style={styles.title}>
          Post New Project
        </h1>

        <p style={styles.subtitle}>
          Find the perfect freelancer for your work.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            style={styles.input}
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            style={styles.textarea}
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <button style={styles.button}>
            Post Project
          </button>

        </form>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f0f9ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "500px",
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#666",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },

  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#0ea5e9",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default PostProject;
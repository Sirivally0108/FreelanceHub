import { useEffect, useState } from "react";
import axios from "axios";

function MyProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        const mine = res.data.data.filter(
          (p) => p.client_id === 24
        );

        setProjects(mine);
      });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Projects</h1>

      {projects.map((p) => (
        <div key={p.project_id}>
          <h3>{p.title}</h3>

          <p>{p.description}</p>

          <p>₹{p.budget}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default MyProjects;
import { useEffect, useState } from "react";
import axios from "axios";

function AppliedProjects() {

  const [proposals, setProposals] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/proposals/freelancer/35")
      .then((res) => setProposals(res.data.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div style={{ padding: "30px" }}>

      <h1>Applied Projects</h1>

      {proposals.map((proposal) => (

        <div
          key={proposal.proposal_id}
          style={{
            background: "white",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >

          <h3>Project ID : {proposal.project_id}</h3>

          <p>
            Budget : ₹{proposal.proposed_budget}
          </p>

          <p>
            Status : {proposal.status}
          </p>

        </div>

      ))}

    </div>
  );
}

export default AppliedProjects;
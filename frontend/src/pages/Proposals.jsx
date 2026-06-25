import { useEffect, useState } from "react";
import axios from "axios";

function Proposals() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/proposals/project/1")
      .then((res) => setProposals(res.data.data));
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(
      `http://localhost:5000/api/proposals/${id}`,
      { status }
    );

    const res = await axios.get(
      "http://localhost:5000/api/proposals/project/1"
    );

    setProposals(res.data.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Project Proposals</h1>

      {proposals.map((p) => (
        <div
          key={p.proposal_id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px"
          }}
        >
          <h3>{p.proposal_text}</h3>

          <p>Budget: ₹{p.proposed_budget}</p>

          <p>Status: {p.status}</p>

          <button
            onClick={() =>
              updateStatus(
                p.proposal_id,
                "accepted"
              )
            }
          >
            Accept
          </button>

          <button
            onClick={() =>
              updateStatus(
                p.proposal_id,
                "rejected"
              )
            }
            style={{ marginLeft: "10px" }}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default Proposals;
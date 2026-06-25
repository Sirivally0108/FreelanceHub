import { useEffect, useState } from "react";
import axios from "axios";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/messages")
      .then((res) => setMessages(res.data.data));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Messages</h1>

      {messages.map((msg) => (
        <div key={msg.message_id}>
          <p>
            <strong>
              {msg.sender_id}
            </strong>

            : {msg.message}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Messages;
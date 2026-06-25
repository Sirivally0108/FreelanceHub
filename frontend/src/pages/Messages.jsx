import { useState, useEffect } from "react";
import axios from "axios";

function Messages() {

  const senderId = 30; // Nagendra
  const receiverId = 24; // Ravi

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const loadMessages = () => {
    axios
      .get(
        `http://localhost:5000/api/messages/${senderId}/${receiverId}`
      )
      .then((res) => setMessages(res.data.data));
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const sendMessage = () => {

    axios
      .post("http://localhost:5000/api/messages", {
        sender_id: senderId,
        receiver_id: receiverId,
        message: text,
      })
      .then(() => {
        setText("");
        loadMessages();
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Project Discussion</h2>

      <div
        style={{
          border: "1px solid #ccc",
          height: "400px",
          overflowY: "scroll",
          padding: "10px",
        }}
      >
        {messages.map((msg) => (
          <div key={msg.message_id}>
            <b>
              {msg.sender_id === senderId
                ? "You"
                : "Client"}
            </b>
            :
            {msg.message}
          </div>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message..."
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default Messages;
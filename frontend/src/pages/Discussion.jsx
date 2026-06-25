import { useState } from "react";

function Discussion() {

  const [messages, setMessages] = useState([
    {
      sender: "Client",
      text: "Hello, when can you start?"
    },
    {
      sender: "Freelancer",
      text: "I can start tomorrow."
    }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {

    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "You",
        text: newMessage
      }
    ]);

    setNewMessage("");
  };

  return (
    <div style={styles.page}>

      <h1>💬 Project Discussion</h1>

      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>
            <strong>{msg.sender}: </strong>
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Type message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={styles.input}
        />

        <button
          style={styles.sendBtn}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>

    </div>
  );
}

const styles = {

  page: {
    padding: "30px",
    minHeight: "100vh",
    background: "#f0f9ff"
  },

  chatBox: {
    background: "white",
    height: "500px",
    overflowY: "auto",
    borderRadius: "15px",
    padding: "20px",
    marginTop: "20px"
  },

  message: {
    marginBottom: "15px",
    padding: "10px",
    background: "#e0f2fe",
    borderRadius: "10px"
  },

  inputArea: {
    display: "flex",
    marginTop: "20px",
    gap: "10px"
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },

  sendBtn: {
    background: "#0284c7",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer"
  }
};

export default Discussion;
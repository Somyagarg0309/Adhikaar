import React, { useState } from "react";
import Messages from "./Messages";
import Input from "./Input";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import "./style.css";

export default function Bot() {
  const [messages, setMessages] = useState([]);

  const addMessage = (messageComponent) => {
    setMessages((prev) => [...prev, messageComponent]);
  };

  const handleSend = async (text) => {
    // Add user's message to the chat
    addMessage(<UserMessage text={text} />);

    // Add bot message that fetches from backend
    addMessage(
      <BotMessage
        fetchMessage={async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/chatbot/chat`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ message: text }),
            });

            const data = await response.json();

            if (response.ok) {
              return data.reply;
            } else {
              return "Sorry, I couldn't understand that.";
            }
          } catch (error) {
            console.error("Error fetching bot response:", error);
            return "An error occurred. Please try again.";
          }
        }}
      />
    );
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">Legal Awareness</div>
      <div className="chatbot-box">
        <Messages messages={messages} />
        <Input onSend={handleSend} />
      </div>
    </div>
  );
}

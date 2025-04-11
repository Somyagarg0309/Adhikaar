import React, { useState } from "react";
import Messages from "./Messages";
import Input from "./Input";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import "./style.css";

export default function Bot() {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg, fromBot = false) => {
    const messageComponent = fromBot ? (
      <BotMessage fetchMessage={() => new Promise(resolve => setTimeout(() => resolve(msg), 1000))} />
    ) : (
      <UserMessage text={msg} />
    );
    setMessages(prev => [...prev, messageComponent]);
  };

  const handleSend = (text) => {
    addMessage(text, false);
    addMessage("Hello! This is a response from the bot.", true); // Dummy bot reply
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        Legal Awareness
      </div>
      <div className="chatbot-box">
        <Messages messages={messages} />
        <Input onSend={handleSend} />
      </div>
    </div>
  );
}

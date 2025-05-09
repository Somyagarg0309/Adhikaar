import React, { useState, useEffect } from "react";

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      try {
        const msg = await fetchMessage();
        setMessage(msg);
      } catch (err) {
        setMessage("Failed to load message.");
        console.error("BotMessage error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      <div className="bot-message">{isLoading ? "..." : message}</div>
    </div>
  );
}

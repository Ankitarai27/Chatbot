import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const USER_ID = "honey123";

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
    ]);

    setLoading(true);

    try {
      const res = await fetch("https://stan-ai-qebr.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: USER_ID,
          message: userText,
          mood: "neutral",
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ I’m having trouble connecting right now." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="chat-card">
        <div className="chat-header">
          <div className="title">STAN</div>
          <div className="subtitle">Your conversational companion</div>
        </div>

        <div className="chat-body">
          {messages.length === 0 && (
            <div className="empty">
              👋 Hi! Tell me how you’re feeling today.
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`bubble ${m.sender}`}>
              {m.text}
            </div>
          ))}

          {loading && (
            <div className="bubble bot typing">
              Stan is typing<span>.</span><span>.</span><span>.</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        <form className="chat-input" onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

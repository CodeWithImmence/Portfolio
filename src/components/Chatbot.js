import React, { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const inactivityTimer = useRef(null);

  // 🧠 Greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const hour = new Date().getHours();
      let greeting = "Hello";
      if (hour < 12) greeting = "Good morning";
      else if (hour < 18) greeting = "Good afternoon";
      else greeting = "Good evening";

      setTimeout(() => {
        setMessages([
          {
            from: "bot",
            text: `👋 ${greeting}! I’m RV’s assistant. How can I help you today?`,
          },
        ]);
      }, 600);
    }
  }, [isOpen, messages.length]);

  // 🕒 Auto-clear after inactivity
  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      setMessages([]);
      setInput("");
    }, 60000);
  };

  useEffect(() => {
    if (messages.length > 0) resetInactivityTimer();
    return () => clearTimeout(inactivityTimer.current);
  }, [messages]);

  // ✉️ Send message + show typing animation
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(
        "https://workflow.codewithimmence.in/webhook/chatbot",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();

      setTimeout(() => {
        setMessages([...newMessages, { from: "bot", text: data.reply }]);
        setIsTyping(false);
      }, 1000);
    } catch (err) {
      setIsTyping(false);
      setMessages([
        ...newMessages,
        { from: "bot", text: "⚠️ Error connecting to chatbot" },
      ]);
    }
  };

  // 🔄 Handle open/close event for hiding scroll-up arrow
  const toggleChat = () => {
    setIsOpen(!isOpen);
    window.dispatchEvent(
      new CustomEvent("chatbotToggle", { detail: { isOpen: !isOpen } })
    );
  };
  useEffect(() => {
    const handleChatToggle = (e) => {
      const isOpen = e.detail.isOpen;
      const btn = document.querySelector(".scroll-top");
      if (btn) btn.style.display = isOpen ? "none" : "block";
    };

    window.addEventListener("chatbotToggle", handleChatToggle);
    return () => window.removeEventListener("chatbotToggle", handleChatToggle);
  }, []);

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          {/* 💬 Header */}
          <div className="chat-header enhanced-header">
            <div className="chat-header-info">
              <div className="avatar-wrapper">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                  alt="Assistant Avatar"
                  className="chat-avatar"
                />
                <div className="avatar-glow"></div>
              </div>
              <div>
                <div className="chat-title">RV’s AI Assistant</div>
                <div className="chat-status">
                  <span className="online-dot"></span> Active now
                </div>
              </div>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>
              <FiX size={12} strokeWidth={2.5} />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from} fade-in`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="msg bot typing-bubble fade-in">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;

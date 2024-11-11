import React, { useRef, useState, useEffect } from 'react';
import './chatbot.css';
import chatbot from "../../assets/images/chatbot.png";


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatbotRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput(""); // Clear the input field

      // Add bot response logic here
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "This is a bot response. How else can I help?" }
        ]);
      }, 1000);
    }
  };

  const handleMouseOver = () => setIsOpen(true);
  const handleMouseOut = (e) => {
    // Check if the mouse has left the chatbot area
    if (chatbotRef.current && !chatbotRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="chatbot" ref={chatbotRef} onMouseOut={handleMouseOut}>
      <button className="chatbot-toggle" onMouseOver={handleMouseOver} >
        <img src={chatbot} width={60} height={60}></img>
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.sender === "user" ? "user" : "bot"}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

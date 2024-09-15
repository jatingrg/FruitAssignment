import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import './chat.css'; // Import the CSS file

function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const api = "AIzaSyCYP0DxtRMJzEMW___26Eo2FBDsLrPzWbg";

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    
    // Add user message to the message list
    setMessages([...messages, { text: question, type: "user" }]);
    setQuestion(""); // Clear the input

    setMessages([...messages, { text: question, type: "user" }, { text: "Loading your answer... \n It might take up to 10 seconds", type: "bot" }]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${api}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const answerText = response.data.candidates[0].content.parts[0].text;
      setMessages([
        ...messages,
        { text: question, type: "user" },
        { text: answerText, type: "bot" }
      ]);
    } catch (error) {
      console.log(error);
      setMessages([
        ...messages,
        { text: question, type: "user" },
        { text: "Sorry - Something went wrong. Please try again!", type: "bot" }
      ]);
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat AI</h1>
      </header>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ))}
        </div>
        <form className="input-form" onSubmit={generateAnswer}>
          <input
            type="text"
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
          />
          <button
            type="submit"
            disabled={generatingAnswer}
          >
            {generatingAnswer ? "Generating..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;

import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Import external CSS
import logo from "./logo.png"; // Ensure you have a logo.png file in /src

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/query", {
        query,
      });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Error retrieving AI response.");
    }
  };

  return (
    <div className="app-container">
      <img src={logo} alt="Crew242 AI Logo" className="logo" />
     
      <p className="subtitle">Find the best yacht crew quickly and efficiently.</p>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="query-input"
        />
        <button onClick={handleQuery} className="submit-btn">Submit</button>
      </div>

      <div className="response-box">
        <h2>AI Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;

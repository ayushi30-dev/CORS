import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchMessage() {
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
          "http://localhost:8080/api/message"
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError(
          `${err.message}. Check the browser console for details.`
      );
      console.error("API request failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
      <main className="container">
        <h1>CORS Demo</h1>
        <p>Frontend: http://localhost:5173</p>
        <p>Backend: http://localhost:8080</p>

        <button onClick={fetchMessage} disabled={loading}>
          {loading ? "Loading..." : "Call Spring Boot API"}
        </button>

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </main>
  );
}

export default App;
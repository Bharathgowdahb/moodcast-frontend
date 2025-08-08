import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  

  const fetchMood = async () => {
    const response = await fetch("https://moodcast-backend.onrender.com/api/moodcast", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, city }),
    });

    const data = await response.json();
    setResult(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMood();
  };

  const getBackgroundClass = () => {
    if (!result || !result.weather) return "app-bg default";
    switch (result.weather.toLowerCase()) {
      case "sunny":
        return "app-bg sunny";
      case "rainy":
        return "app-bg rainy";
      case "cloudy":
        return "app-bg cloudy";
      case "snowy":
        return "app-bg snowy";
      case "windy":
        return "app-bg windy";
      default:
        return "app-bg default";
    }
  };
        

  return (
    <div className={getBackgroundClass()}>
      <h1>MoodCast 🌤️</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="City name" value={city} onChange={(e) => setCity(e.target.value)} required />
        <button type="submit">Get MoodCast</button>
      </form>

      {result && (
        <div>
          <h3>Hello {result.name}!</h3>
          <p>Weather in {result.city}: {result.weather}, {result.temp}°C</p>
          <p> {result.mood}</p>
          <p>quote: {result.quote}</p>
          <p>joke: {result.joke}</p>
        </div>
      )}
      <footer style={{ marginTop: "20px" }}>
        Want a custom app like this? Contact <strong>Bharath</strong> for freelance work.
      </footer>
    </div>
  );
}

export default App;

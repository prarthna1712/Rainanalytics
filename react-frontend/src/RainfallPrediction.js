import React from "react";
import { useState } from "react";
import axios from "axios";

function RainfallPrediction() {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        temperature: parseFloat(temperature),
        humidity: parseFloat(humidity),
        wind_speed: parseFloat(windSpeed),
      });
      setPrediction(response.data.predicted_rainfall);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };
  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px", color: "beige" }}>
        <h1>Rainfall Prediction</h1>
        <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
          <input
            type="number"
            placeholder="Temperature (°C)"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            style={{ margin: "10px", padding: "10px", width: "200px" }}
            required
          />
          <input
            type="number"
            placeholder="Humidity (%)"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            style={{ margin: "10px", padding: "10px", width: "200px" }}
            required
          />
          <input
            type="number"
            placeholder="Wind Speed (km/h)"
            value={windSpeed}
            onChange={(e) => setWindSpeed(e.target.value)}
            style={{ margin: "10px", padding: "10px", width: "200px" }}
            required
          />
          <button type="submit" style={{ padding: "10px 20px" }}>
            Predict Rainfall
          </button>
        </form>
        {prediction !== null && (
          <div style={{ color: "beige" }}>
            <h2>Predicted Rainfall Amount: {prediction.toFixed(2)} mm</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default RainfallPrediction;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Hà Nội');

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const fetchWeather = async () => {
    const apiKey = 'YOUR_API_KEY';
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    setWeather(response.data);
  };

  return (
    <div className="App">
      <h1>Ứng dụng Thời tiết</h1>
      <input
type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Tìm kiếm</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Nhiệt độ: {weather.main.temp} °C</p>
          <p>Trời: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
'use client';
import { useState } from 'react';
import axios from 'axios';
import ForecastCard from './components/ForecastCard';
import WeatherCard from './components/WeatherCard';  
import { useTheme } from './context/ThemeContext';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  
  const { dark, toggle } = useTheme();

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);  
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data);
      setCity('');
    } catch (err) {
      setWeather(null);
      setError('City not found!');
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div
      className={`container-fluid min-vh-100 py-4 d-flex flex-column ${
        weather ? 'justify-content-start' : 'justify-content-start'
      }`}
    >
      <div className="container">
        <div className="text-end mb-3">
          <button className="btn btn-outline-secondary" onClick={toggle}>
            {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <h1 className="text-center mb-4">🌦️ Weather Dashboard</h1>

        <form onSubmit={fetchWeather} className="d-flex w-75 mx-auto mb-4 position-relative">
  <input
    type="text"
    className="form-control rounded-pill border-0 shadow-sm py-2 px-3 me-2"
    placeholder="Enter city name..."
    value={city}
    onChange={(e) => setCity(e.target.value)}
  />
  <button
    className="btn btn-primary rounded-pill px-4 shadow-sm"
    type="submit"
  >
    Search
  </button>
</form>


        {error && <div className="alert alert-danger">{error}</div>}
        {loading && (
          <div className="text-center">
            <div className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div>
            <span> Loading...</span>
          </div>
        )}

        {weather && !loading && (
          <>
            <WeatherCard weather={weather} />
            <ForecastCard forecast={weather.forecast} />
          </>
        )}
      </div>
    </div>
  );
}

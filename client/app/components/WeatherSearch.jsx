'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useDebounce } from 'use-debounce'; // For better input performance

export default function WeatherSearch({ setWeatherData }) {
  const [city, setCity] = useState('');
  const [debouncedCity] = useDebounce(city, 500);
  const [suggestions, setSuggestions] = useState([]);
  
  const handleSearch = async () => {
    if (!city) return;
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(res.data);
    } catch (err) {
      console.error('Error fetching weather:', err);
    }
  };

  const fetchSuggestions = async () => {
    if (!debouncedCity) return;
    try {
      const res = await axios.get(`https://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${debouncedCity}&limit=5`);
      setSuggestions(res.data.data);
    } catch (err) {
      console.error('Error fetching suggestions:', err);
    }
  };
  React.useEffect(() => {
    fetchSuggestions();
  }, [debouncedCity]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white text-center p-5"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1526891880507-5c01157f0bae)',
        backgroundSize: 'cover',
        height: '100vh',
        borderRadius: '20px 0 0 20px',
      }}
    >
      <h2 className="mb-3">The Only Weather Forecast You Need</h2>
      <div className="input-group w-75 position-relative">
        <input
          type="text"
          className="form-control"
          placeholder="Enter location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-light" onClick={handleSearch}>
          🔍
        </button>

        {suggestions.length > 0 && (
          <ul className="position-absolute w-100 bg-white list-unstyled mt-2 shadow">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-3 py-2 border-bottom cursor-pointer"
                onClick={() => {
                  setCity(suggestion.city);
                  setSuggestions([]);
                }}
              >
                {suggestion.city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

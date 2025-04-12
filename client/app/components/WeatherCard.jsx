'use client';

import React from 'react';

export default function WeatherCard({ weather }) {
  return (
    <div className="card text-center mx-auto mb-4 animate__animated animate__fadeIn" style={{ maxWidth: '400px' }}>
      <div className="card-body">
        <h3 className="card-title">{weather.city}</h3>
        <img src={weather.icon} alt={weather.condition} />
        <h4>{weather.temperature}°C - {weather.condition}</h4>
        <p>💧 Humidity: {weather.humidity}%</p>
        <p>🌬️ Wind: {weather.windSpeed} m/s</p>
      </div>
    </div>
  );
}

import React from 'react';
import moment from 'moment';

export default function ForecastCards({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
      {forecast.map((day, idx) => (
        <div
          className="card text-center p-3 shadow-sm animate__animated animate__fadeInUp"
          key={idx}
          style={{
            width: '120px',
            borderRadius: '12px',
            animationDelay: `${idx * 0.1}s`,
          }}
        >
          <h6 className="text-muted">{moment(day.date).format('ddd')}</h6>
          <img src={day.icon} alt={day.condition} width={50} height={50} className="mx-auto" />
          <p className="mb-1">{Math.round(day.temperature)}°C</p>
          <small className="text-muted">{day.condition}</small>
        </div>
      ))}
    </div>
  );
}

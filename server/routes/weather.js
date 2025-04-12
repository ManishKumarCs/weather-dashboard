const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;

  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const currentRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const forecastRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );

    const current = currentRes.data;
    const forecastData = forecastRes.data.list;
    const dailyForecasts = forecastData.filter(f => f.dt_txt.includes("12:00:00")).slice(0, 5);

    const forecast = dailyForecasts.map(day => ({
      date: day.dt_txt,
      temperature: day.main.temp,
      condition: day.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
    }));

    const result = {
      city: current.name,
      temperature: current.main.temp,
      condition: current.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
      humidity: current.main.humidity,
      windSpeed: current.wind.speed,
      forecast 
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "City not found" });
  }
});

module.exports = router;

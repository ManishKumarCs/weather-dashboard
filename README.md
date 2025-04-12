# 🌦️ Weather Dashboard

A sleek, modern weather dashboard built using the **MERN stack** (MongoDB not used here). It fetches **real-time weather and 5-day forecasts** for any city using the OpenWeatherMap API.

> 🚀 Live Demo: [Live](https://weather-updates-dashboard.vercel.app/)  

---

## ✨ Features

- 🔍 Search for any city and get current weather
- 📅 5-day forecast with detailed cards
- 🌙 Light / Dark Mode Toggle
- 💬 Error handling for invalid cities
- ⚡ Responsive & mobile-friendly UI

---

## 🛠️ Tech Stack

| Frontend (client) | Backend (server) |
|------------------|------------------|
| Next.js 15       | Node.js + Express|
| React 19         | Axios            |
| Bootstrap 5      | dotenv           |

---

## 📁 Project Structure

weather-dashboard/ ├── client/ # Next.js Frontend │ ├── app/ │ ├── components/ │ ├── context/ │ ├── public/ │ └── ... ├── server/ # Express Backend │ ├── routes/ │ ├── server.js │ └── .env ├── README.md

---

## 🌐 Deployment Setup

### ✅ Backend (Render)
1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Root directory: `server`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add env variable:
PORT = 5000

markdown
Copy
Edit

### ✅ Frontend (Vercel)
1. Go to [Vercel](https://vercel.com)
2. Import project → Set **root directory** as `client`
3. Add environment variable:
NEXT_PUBLIC_API = https://your-render-url.onrender.com


---

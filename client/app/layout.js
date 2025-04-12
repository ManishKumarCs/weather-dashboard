import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import { ThemeProvider } from './context/ThemeContext'; 

export const metadata = {
  title: 'Weather Dashboard',
  description: 'Real-time weather app using OpenWeather API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
          <main className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

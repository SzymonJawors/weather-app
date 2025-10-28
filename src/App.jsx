import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import video from './assets/video.mp4';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const url = `${API_URL}?q=${city}&units=metric&lang=pl&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Nie znaleziono miasta.');
      } else {
        setError('Pojawił się błąd, spróbuj ponownie później.');
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-blue-200'>
      <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
        <source src={video} type='video/mp4'/>
      </video>
      <div className="bg-black/70 z-10 text-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className='text-3xl font-bold text-center mb-6'>Sprawdź pogodę</h1>
        <SearchBar fetchWeather={fetchWeather} />
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default App;

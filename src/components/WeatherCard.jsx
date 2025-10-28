import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="mt-6 bg-white/10 rounded-2xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-semibold">
        {weather.name}, {weather.sys.country}
      </h2>

      <div className="flex justify-center items-center mt-4">
        <img
          className="w-16 h-16"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p className="text-4xl font-bold ml-2">
          {Math.round(weather.main.temp)}°C
        </p>
      </div>

      <p className="text-gray-400 capitalize mt-2">
        {weather.weather[0].description}
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div className="bg-white/5 rounded-xl p-3">
          <p className="font-medium text-gray-300">Wilgotność</p>
          <p className="text-lg font-semibold">{weather.main.humidity}%</p>
        </div>

        <div className="bg-white/5 rounded-xl p-3">
          <p className="font-medium text-gray-300">Wiatr</p>
          <p className="text-lg font-semibold">{weather.wind.speed} m/s</p>
        </div>

        <div className="bg-white/5 rounded-xl p-3">
          <p className="font-medium text-gray-300">Ciśnienie</p>
          <p className="text-lg font-semibold">{weather.main.pressure} hPa</p>
        </div>

        <div className="bg-white/5 rounded-xl p-3">
          <p className="font-medium text-gray-300">Odczuwalna temperatura</p>
          <p className="text-lg font-semibold">
            {Math.round(weather.main.feels_like)}°C
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

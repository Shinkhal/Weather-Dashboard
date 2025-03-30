"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

export default function WeatherCard({ forecast }) {
  if (!forecast?.forecast?.city) {
    return <p className="text-gray-500 dark:text-gray-300 text-center mt-4">No weather data available</p>;
  }
  const { today, forecast: forecastData } = forecast;
  const dailyForecasts = forecastData.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        📍 {forecastData.city.name}, {forecastData.city.state}, {forecastData.city.country}
      </h2>
      <div className="bg-blue-200 dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-xl shadow-lg w-full max-w-md mt-4 border border-emerald-500 dark:border-emerald-700">
        <div className="text-center mt-3">
          <p className="text-4xl font-bold">{today.main.temp}°C</p>
          <p className="capitalize text-emerald-600 dark:text-emerald-300">{today.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
            alt={today.weather[0].description}
            className="mx-auto"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
          <p>🔽 Min Temp: {today.main.temp_min}°C</p>
          <p>🔼 Max Temp: {today.main.temp_max}°C</p>
          <p>🌡️ Feels Like: {today.main.feels_like}°C</p>
          <p>💨 Wind: {today.wind.speed} km/h</p>
          <p>💧 Humidity: {today.main.humidity}%</p>
          <p>👁️ Visibility: {today.visibility / 1000} km</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300 mt-8">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {dailyForecasts.map((day, index) => (
          <Card key={index} className="p-4 w-50 bg-blue-200 dark:bg-gray-900 border border-emerald-500 dark:border-emerald-700 text-gray-900 dark:text-white shadow-lg text-center">
            <CardHeader>
              <CardTitle className="text-emerald-600 dark:text-emerald-300">
                {format(new Date(day.dt * 1000), "EEE, MMM d")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-bold">{day.main.temp}°C</p>
              <p className="capitalize">{day.weather[0].description}</p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="mx-auto"
              />
              <p>💨 {day.wind.speed} km/h</p>
              <p>💧 {day.main.humidity}%</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

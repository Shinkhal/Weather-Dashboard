"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"; 

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const geoResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
      );
      const geoData = await geoResponse.json();

      if (!geoData.length) {
        throw new Error("City not found. Try another name.");
      }
      const { lat, lon, state } = geoData[0];

      const [forecastResponse, currentWeatherResponse] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`),
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      ]);

      if (!forecastResponse.ok || !currentWeatherResponse.ok) {
        throw new Error("Weather data not available.");
      }

      const forecastData = await forecastResponse.json();
      const currentWeatherData = await currentWeatherResponse.json();
      forecastData.city.state = state || "";
      onSearch({ today: currentWeatherData, forecast: forecastData });
      setCity(""); 
    } catch (error) {
      console.error("Error fetching weather:", error.message);
      onSearch(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && city.trim()) {
      fetchWeather();
    }
  };

  return (
    <div className="flex flex-col items-center w-full mt-6">
      <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg px-4 py-2 rounded-xl w-full max-w-lg">
        {/* 🌍 City Input */}
        <Input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none focus:ring-0 placeholder-gray-600 dark:placeholder-gray-300 text-gray-900 dark:text-white text-lg"
        />

        {/* 🔍 Search Button */}
        <Button
          onClick={fetchWeather}
          disabled={loading || !city.trim()} 
          className="px-6 py-2 rounded-md transition-all duration-300 flex items-center bg-blue-600 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-700 text-white"
        >
          {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Search"}
        </Button>
      </div>
    </div>
  );
}

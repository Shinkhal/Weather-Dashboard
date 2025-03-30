"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [forecastData, setForecastData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem("recent")) || [];
    setRecentSearches(storedSearches);
  }, []);

  const handleSearch = (data) => {
    if (!data || !data.forecast?.city?.name) return;
    setForecastData(data);
    const cityName = data.forecast.city.name;
    const updatedSearches = [cityName, ...recentSearches.filter((city) => city !== cityName)].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recent", JSON.stringify(updatedSearches));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gradient-to-b from-gray-800 to-gray-950 text-gray-900 dark:text-gray-100 transition-all duration-300">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center py-10 px-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md">
            Weather Dashboard
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-2">
            Get real-time & 5-day forecasts for any city 🌍
          </p>
        </div>
        <SearchBar onSearch={handleSearch} />

        {recentSearches.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Recent Searches:
            </h3>
            <div className="flex gap-3 mt-2">
              {recentSearches.map((city, index) => (
                <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-md">
                  {city}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="w-full flex justify-center mt-8 px-4">
          {forecastData ? (
            <WeatherCard forecast={forecastData} />
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-lg text-center mt-6">
              Start by searching for a city to view the weather forecast.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

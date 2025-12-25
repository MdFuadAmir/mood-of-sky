import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import Loading from "./Components/Loading/Loading";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
import logo from "../src/assets/logo.png";

const API_KEY = "a9def3a2db7c10c69a32fd260b64b0f2";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-8">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/JjbTDnMW/anime-style-clouds.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-purple-700 opacity-40" />
      </div>

      {/* Main */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="flex flex-col justify-center items-center">
          <img
            src={logo}
            alt=""
            className="w-12 h-12 bg-purple-200 rounded-full"
          />
          <h1 className="text-4xl font-bold text-white mb-4">
            MOOD OF <span className="text-sky-500">SKY</span>
          </h1>
        </div>

        <p className="text-white mb-8 text-center max-w-xl">
          Check the current weather of any city in a beautiful way 🌤
        </p>

        {/* Search */}
        <form onSubmit={getWeather} className="w-full max-w-md mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-5 pr-14 py-3 rounded-xl
              bg-white/20 backdrop-blur-md
              border border-white/30
              text-white placeholder-gray-300 outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2
              w-10 h-10 rounded-lg bg-white/30 text-white
              flex items-center justify-center hover:bg-white/50"
            >
              <FaSearch />
            </button>
          </div>
        </form>

        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {weather && !loading && !error && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default App;

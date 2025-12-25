import {
  FaTint,
  FaWind,
  FaCloud,
  FaEye,
  FaCompressArrowsAlt,
} from "react-icons/fa";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;
  return (
    <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl text-white w-80  md:w-96 text-center space-y-2 mb-8">
      {/* City */}
      <h2 className="text-2xl font-bold">
        {weather.name}, {weather.sys?.country}
      </h2>
      {/* Icon */}
      <img
        className="mx-auto"
        src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
        alt="weather"
      />
      {/* Description */}
      <p className="capitalize opacity-90">
        {weather.weather?.[0]?.description}
      </p>
      {/* Temperature */}
      <h1 className="text-4xl font-bold">{Math.round(weather.main?.temp)}°C</h1>
      <p className="text-sm opacity-80">
        Feels like {Math.round(weather.main?.feels_like)}°C
      </p>
      {/* Extra Info */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <p className="flex items-center gap-1">
          <FaTint className="text-blue-300" />
          Humidity: {weather.main?.humidity}%
        </p>

        <p className="flex items-center gap-1">
          <FaWind className="text-gray-200" />
          Wind: {weather.wind?.speed} m/s
        </p>

        <p className="flex items-center gap-1">
          <FaCloud className="text-gray-300" />
          Clouds: {weather.clouds?.all}%
        </p>

        <p className="flex items-center gap-1">
          <FaEye className="text-purple-300" />
          Visibility: {weather.visibility / 1000} km
        </p>

        <p className="flex items-center gap-1 col-span-2 justify-center">
          <FaCompressArrowsAlt className="text-green-300" />
          Pressure: {weather.main?.pressure} hPa
        </p>
      </div>
    </div>
  );
};
export default WeatherCard;

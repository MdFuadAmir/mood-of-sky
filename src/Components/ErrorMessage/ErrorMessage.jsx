import { FaCloudRain } from "react-icons/fa";

const ErrorMessage = ({ message }) => {
    return (
        <div className="w-80 p-6 rounded-xl bg-red-500/20 backdrop-blur-md text-white text-center">
      <FaCloudRain className="text-5xl mx-auto mb-4 opacity-80" />
      <h2 className="text-xl font-bold mb-2">Oops!</h2>
      <p className="text-sm opacity-90">{message}</p>
    </div>
    );
};

export default ErrorMessage;
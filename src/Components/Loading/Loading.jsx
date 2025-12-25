
const Loading = () => {
    return (
        <div className="w-80 p-6 rounded-xl bg-white/20 backdrop-blur-md text-white text-center animate-pulse">
      <div className="h-6 bg-white/30 rounded mb-4"></div>

      <div className="w-20 h-20 mx-auto bg-white/30 rounded-full mb-4"></div>

      <div className="h-4 bg-white/30 rounded mb-2"></div>
      <div className="h-10 bg-white/30 rounded mb-4"></div>

      <div className="flex justify-between text-sm">
        <div className="w-20 h-4 bg-white/30 rounded"></div>
        <div className="w-20 h-4 bg-white/30 rounded"></div>
      </div>
    </div>
    );
};

export default Loading;
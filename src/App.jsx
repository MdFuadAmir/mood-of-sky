import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://i.ibb.co.com/JjbTDnMW/anime-style-clouds.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-purple-700 opacity-30"></div>
        {/* <div className="absolute inset-0 bg-black-20 "></div> */}
      </div>
      {/* main section */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* header */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl text-white font-bold mb-4 drop-shadow-2xl tracking-tight">
                MOOD OF{" "}
                <span className="bg-linear-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
                  SKY
                </span>
              </h1>
              <p className="text-white mb-8 max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                eos excepturi quasi consectetur saepe accusamus quos enim illo
                ipsum magni.
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 mb-12">
              <SearchBar/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

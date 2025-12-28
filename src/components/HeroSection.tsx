const HeroSection = () => (
  <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Left Side - Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Experience the Future of<br /><span className="text-blue-400">Urban Mobility</span></h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">Transform your daily commute with premium electric bikes designed for modern city living. Configure your ride or book a test ride today!</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 md:justify-start">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow">Configure Your Bike</button>
          <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-8 rounded-lg shadow">Book Test Ride</button>
        </div>
        <div className="flex flex-wrap gap-8 mb-8 md:justify-start justify-center">
          <div>
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-gray-400">Happy Riders</div>
          </div>
          <div>
            <div className="text-3xl font-bold">2.5M</div>
            <div className="text-gray-400">CO₂ Tons Saved</div>
          </div>
          <div>
            <div className="text-3xl font-bold">$3K+</div>
            <div className="text-gray-400">Avg. Savings</div>
          </div>
        </div>
        <div className="flex gap-8 md:justify-start justify-center">
          <div>
            <div className="text-xl font-bold">100+ Miles</div>
            <div className="text-gray-400">Single Charge Range</div>
          </div>
          <div>
            <div className="text-xl font-bold">2 Hours</div>
            <div className="text-gray-400">Full Charge Time</div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Rotating Bike */}
      <div className="flex-1 flex justify-center">
        <div className="rotating-bike-container">
          <img src="https://img.rocket.new/generatedImages/rocket_gen_img_12608b623-1766158201284.png" alt="Premium electric bike" className="rotating-bike" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

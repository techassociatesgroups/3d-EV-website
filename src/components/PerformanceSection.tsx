const PerformanceSection = () => (
  <section className="bg-white text-gray-900 py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Unmatched <span className="text-blue-600">Performance</span></h2>
    <p className="text-lg max-w-2xl mb-8">Explore the cutting-edge features that make our electric bikes the smartest choice for modern urban mobility.</p>
    <img src="https://images.unsplash.com/photo-1633679885941-21dab0209992" alt="Premium electric bike features" className="w-full max-w-xl rounded-xl shadow-lg mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mb-8">
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Extended Range</h3>
        <div className="text-2xl font-bold text-blue-600 mb-1">100+ Miles</div>
        <p className="text-gray-700">Industry-leading battery capacity ensures you can complete your entire week of commuting on a single charge.</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Top Speed</h3>
        <div className="text-2xl font-bold text-blue-600 mb-1">28 MPH</div>
        <p className="text-gray-700">Powerful motor delivers smooth acceleration and maintains highway-legal speeds for efficient urban travel.</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Fast Charging</h3>
        <div className="text-2xl font-bold text-blue-600 mb-1">2 Hours</div>
        <p className="text-gray-700">Quick-charge technology gets you back on the road fast. Charge at home, work, or any standard outlet.</p>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Annual Savings</h3>
        <div className="text-2xl font-bold text-blue-600 mb-1">$3,200</div>
        <p className="text-gray-700">Eliminate fuel costs, reduce maintenance expenses, and save on parking fees with electric efficiency.</p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">DOT & UL Safety Certified</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">5 Years Warranty</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Nationwide Free Shipping</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">24/7 Support</div>
    </div>
  </section>
);

export default PerformanceSection;

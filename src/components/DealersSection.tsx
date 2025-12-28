const DealersSection = () => (
  <section className="bg-white text-gray-900 py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Book Your <span className="text-blue-600">Test Ride</span></h2>
    <p className="text-lg max-w-2xl mb-8">Visit one of our 500+ authorized dealers nationwide. Experience the bike in person and take it for a spin.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-8">
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">EV Bike Pro Downtown</h3>
        <div className="text-gray-700 mb-2">123 Main Street, San Francisco, CA 94102</div>
        <div className="text-blue-600 font-bold mb-2">(415) 555-0123</div>
        <div className="text-gray-600">Mon-Sat: 9AM-7PM, Sun: 10AM-6PM</div>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">EV Bike Pro Marina</h3>
        <div className="text-gray-700 mb-2">456 Bay Street, San Francisco, CA 94123</div>
        <div className="text-blue-600 font-bold mb-2">(415) 555-0456</div>
        <div className="text-gray-600">Mon-Sat: 10AM-8PM, Sun: 11AM-6PM</div>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">EV Bike Pro Mission</h3>
        <div className="text-gray-700 mb-2">789 Valencia Street, San Francisco, CA 94110</div>
        <div className="text-blue-600 font-bold mb-2">(415) 555-0789</div>
        <div className="text-gray-600">Mon-Sat: 9AM-7PM, Sun: 10AM-5PM</div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">500+ Dealers Nationwide</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Same-Day Setup</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Lifetime Support</div>
    </div>
  </section>
);

export default DealersSection;

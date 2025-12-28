const FAQSection = () => (
  <section className="bg-gray-900 text-white py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Got <span className="text-blue-400">Questions?</span></h2>
    <p className="text-lg max-w-2xl mb-8">Find answers to common questions about range, charging, maintenance, and more.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mb-8">
      <div className="bg-gray-800 rounded-lg p-6 shadow text-left">
        <h3 className="text-xl font-semibold mb-2">What is the real-world range of the bike?</h3>
        <p className="text-gray-300">Up to 100 miles on a single charge, depending on usage and conditions.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow text-left">
        <h3 className="text-xl font-semibold mb-2">How long does it take to fully charge the battery?</h3>
        <p className="text-gray-300">A full charge takes about 2 hours with our fast-charging technology.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow text-left">
        <h3 className="text-xl font-semibold mb-2">Is the bike suitable for all weather conditions?</h3>
        <p className="text-gray-300">Yes, our bikes are designed for year-round use and are weather-resistant.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow text-left">
        <h3 className="text-xl font-semibold mb-2">What maintenance does an electric bike require?</h3>
        <p className="text-gray-300">Minimal maintenance is needed—just keep the battery charged and tires inflated.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow text-left">
        <h3 className="text-xl font-semibold mb-2">Can I ride the bike without using electric assist?</h3>
        <p className="text-gray-300">Yes, you can pedal the bike like a traditional bicycle at any time.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow text-left">
        <h3 className="text-xl font-semibold mb-2">What is the warranty coverage?</h3>
        <p className="text-gray-300">5-year warranty on frame and battery, plus lifetime support.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow text-left">
        <h3 className="text-xl font-semibold mb-2">Are there charging stations available?</h3>
        <p className="text-gray-300">You can charge at any standard outlet—no special stations required.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow text-left">
        <h3 className="text-xl font-semibold mb-2">How much does it cost to charge the battery?</h3>
        <p className="text-gray-300">Only about $0.05 per full charge—much less than gas!</p>
      </div>
    </div>
    <div className="bg-blue-50 rounded-lg p-6 shadow max-w-md mx-auto mb-8 text-gray-900">
      <h3 className="text-xl font-semibold mb-2">Still Have Questions?</h3>
      <p className="mb-4">Our expert team is here to help you make the right decision. Get personalized answers to your specific questions.</p>
      <div className="flex flex-col gap-2">
        <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow">Live Chat Support</button>
        <button className="bg-blue-100 text-blue-600 font-semibold py-2 px-6 rounded-lg shadow">Call Us: 1-800-EV-BIKE</button>
      </div>
    </div>
  </section>
);

export default FAQSection;

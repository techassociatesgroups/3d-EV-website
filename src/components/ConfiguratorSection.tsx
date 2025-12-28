const ConfiguratorSection = () => (
  <section className="bg-white text-gray-900 py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Build Your <span className="text-blue-600">Perfect Ride</span></h2>
    <p className="text-lg max-w-2xl mb-8">Customize every detail to match your style and needs. Your configuration is automatically saved.</p>
    <img src="https://img.rocket.new/generatedImages/rocket_gen_img_12608b623-1766158201284.png" alt="Electric bike midnight black" className="w-full max-w-xl rounded-xl shadow-lg mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-8">
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Choose Your Color</h3>
        <div className="flex gap-2">
          <span className="bg-black w-8 h-8 rounded-full border-4 border-blue-500"></span>
          <span className="bg-blue-500 w-8 h-8 rounded-full"></span>
          <span className="bg-white w-8 h-8 rounded-full border"></span>
          <span className="bg-orange-500 w-8 h-8 rounded-full"></span>
        </div>
        <div className="mt-2 text-sm text-gray-600">Midnight Black (Selected)</div>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Select Battery Capacity</h3>
        <ul className="text-left text-gray-700 list-disc list-inside">
          <li>Standard Battery <span className="float-right">Up to 100 miles (Included)</span></li>
          <li>Extended Battery <span className="float-right">Up to 150 miles (+$399)</span></li>
          <li>Pro Battery <span className="float-right">Up to 200 miles (+$699)</span></li>
        </ul>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Add Accessories</h3>
        <ul className="text-left text-gray-700 list-disc list-inside">
          <li>Smart Helmet <span className="float-right">$149</span></li>
          <li>Premium Lock <span className="float-right">$99</span></li>
          <li>LED Light Kit <span className="float-right">$79</span></li>
          <li>Cargo Basket <span className="float-right">$129</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-blue-50 rounded-lg p-6 shadow max-w-md mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">Base Price</span>
        <span>$2,499</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">Total Price</span>
        <span className="text-blue-600 font-bold text-xl">$2,499</span>
      </div>
      <button className="w-full bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow mt-4">Add to Cart</button>
    </div>
  </section>
);

export default ConfiguratorSection;

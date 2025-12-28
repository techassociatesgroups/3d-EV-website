const FinancingSection = () => (
  <section className="bg-white text-gray-900 py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Own Your Bike for as Low as <span className="text-blue-600">$120/Month</span></h2>
    <p className="text-lg max-w-2xl mb-8">Choose a payment plan that fits your budget. Get instant approval with our simple application process.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-8">
      <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">6-Month Plan</h3>
        <div className="text-2xl font-bold text-blue-600 mb-1">$433/mo</div>
        <div className="text-gray-700 mb-2">0% APR, Total $2,598</div>
        <ul className="text-left text-gray-700 list-disc list-inside">
          <li>No interest charges</li>
          <li>Pay off faster</li>
          <li>Build credit history</li>
        </ul>
      </div>
      <div className="bg-blue-100 rounded-lg p-6 shadow flex flex-col items-center border-2 border-blue-600">
        <h3 className="text-xl font-semibold mb-2">12-Month Plan <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded">Most Popular</span></h3>
        <div className="text-2xl font-bold text-blue-600 mb-1">$225/mo</div>
        <div className="text-gray-700 mb-2">5.9% APR, Total $2,700</div>
        <ul className="text-left text-gray-700 list-disc list-inside">
          <li>Low monthly payments</li>
          <li>Flexible terms</li>
          <li>Early payoff option</li>
        </ul>
      </div>
      <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">24-Month Plan</h3>
        <div className="text-2xl font-bold text-blue-600 mb-1">$120/mo</div>
        <div className="text-gray-700 mb-2">8.9% APR, Total $2,880</div>
        <ul className="text-left text-gray-700 list-disc list-inside">
          <li>Lowest monthly payment</li>
          <li>Extended terms</li>
          <li>Budget-friendly</li>
        </ul>
      </div>
    </div>
    <div className="bg-blue-50 rounded-lg p-6 shadow max-w-md mx-auto mb-8">
      <div className="font-semibold mb-2">99% Approval Probability</div>
      <div className="flex justify-between items-center mb-2">
        <span>Monthly Payment</span>
        <span className="text-blue-600 font-bold">$225</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span>Duration</span>
        <span>12 months</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span>Total Cost</span>
        <span>$2,700</span>
      </div>
      <button className="w-full bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow mt-4">Apply Now</button>
    </div>
  </section>
);

export default FinancingSection;

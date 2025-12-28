const ProblemSection = () => (
  <section className="bg-white text-gray-900 py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Traditional Transportation is <span className='text-red-500'>Broken</span></h2>
    <p className="text-lg max-w-2xl mb-8">In major cities, commuters face unprecedented challenges with rising costs, environmental impact, and wasted time in traffic congestion.</p>
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      <div>
        <div className="text-2xl font-bold text-blue-600">+12% YoY</div>
        <div className="text-gray-600">54 hrs Average Annual Time Lost in Traffic</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-blue-600">+18% YoY</div>
        <div className="text-gray-600">$4,200 Annual Fuel & Parking Costs</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-blue-600">+5% YoY</div>
        <div className="text-gray-600">4.6 tons CO₂ Emissions per Car Annually</div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <div className="bg-gray-100 rounded-lg p-6 shadow">
        <h3 className="text-xl font-semibold mb-2">The Cost of Inaction</h3>
        <ul className="text-left list-disc list-inside text-gray-700">
          <li>Average commuter spends 54 hours annually stuck in traffic</li>
          <li>Fuel prices increased 18% in the past year alone</li>
          <li>Parking costs in urban areas exceed $200/month</li>
          <li>Traditional vehicles contribute 29% of greenhouse gas emissions</li>
          <li>Limited parking availability causes stress and delays</li>
        </ul>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 shadow flex flex-col justify-center">
        <div className="text-2xl font-bold mb-2">$4,200</div>
        <div className="text-gray-700 mb-2">Annual Transportation Cost</div>
        <div className="flex flex-col gap-1 text-gray-600">
          <div>Fuel <span className="float-right">$2,400</span></div>
          <div>Parking <span className="float-right">$1,200</span></div>
          <div>Maintenance <span className="float-right">$600</span></div>
          <div className="font-semibold mt-2">Total Annual Cost <span className="float-right">$4,200</span></div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;

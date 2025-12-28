const SolutionSection = () => (
  <section className="bg-gray-900 text-white py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Revolutionary <span className="text-blue-400">Electric Mobility</span></h2>
    <p className="text-lg max-w-2xl mb-8">Transform your daily commute with cutting-edge electric bike technology that combines performance, sustainability, and cost savings.</p>
    <img src="https://images.unsplash.com/photo-1616414627817-42b4d91bcb5d" alt="Commuter riding electric bike" className="w-full max-w-xl rounded-xl shadow-lg mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-8">
      <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">The Electric Advantage</h3>
        <p className="text-gray-300">Experience the perfect blend of human power and electric assistance for effortless urban navigation.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Intelligent Power System</h3>
        <p className="text-gray-300">Advanced battery technology delivers 100+ miles of range with regenerative braking to extend your journey.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Massive Cost Savings</h3>
        <p className="text-gray-300">Electricity costs just $0.05 per charge compared to $50+ for gas. Save over $3,000 annually on transportation.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
      <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
        <p className="text-gray-300">Zero emissions during operation. Reduce your carbon footprint by 80% compared to traditional car commuting.</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Before vs. After Transformation</h3>
        <ul className="text-left text-gray-300 list-disc list-inside">
          <li>Bypass traffic with bike lanes & shortcuts</li>
          <li>Save $3,000+ with electric efficiency</li>
          <li>Reduce carbon footprint by 80%</li>
          <li>Park anywhere with compact design</li>
        </ul>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Key Benefits</h3>
        <ul className="text-left text-gray-300 list-disc list-inside">
          <li>Effortless urban navigation</li>
          <li>Significant cost savings</li>
          <li>Eco-friendly commuting</li>
        </ul>
      </div>
    </div>
  </section>
);

export default SolutionSection;

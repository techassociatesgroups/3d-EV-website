const ComparisonSection = () => (
  <section className="bg-gray-900 text-white py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">See the <span className="text-blue-400">Clear Advantage</span></h2>
    <p className="text-lg max-w-2xl mb-8">Compare electric bikes against traditional transportation methods across key metrics that matter most.</p>
    <div className="overflow-x-auto w-full max-w-4xl mb-8">
      <table className="min-w-full text-left border border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-gray-800">
          <tr>
            <th className="py-3 px-4">Metric</th>
            <th className="py-3 px-4">EV Bike</th>
            <th className="py-3 px-4">Car</th>
            <th className="py-3 px-4">Public Transit</th>
          </tr>
        </thead>
        <tbody className="bg-gray-950">
          <tr>
            <td className="py-2 px-4">Annual Cost</td>
            <td className="text-green-400 font-bold">$800</td>
            <td>$4,200</td>
            <td>$200</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Commute Time (10 miles)</td>
            <td>25 minutes</td>
            <td>35 minutes</td>
            <td>45 minutes</td>
          </tr>
          <tr>
            <td className="py-2 px-4">CO₂ Emissions (Annual)</td>
            <td className="text-green-400 font-bold">0.2 tons</td>
            <td>4.6 tons</td>
            <td>0 tons</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Maintenance Cost</td>
            <td>$150/year</td>
            <td>$1,200/year</td>
            <td>$100/year</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Parking Hassle</td>
            <td>Park anywhere</td>
            <td>Limited & expensive</td>
            <td>Easy parking</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Health Benefits</td>
            <td>Moderate exercise</td>
            <td>Sedentary</td>
            <td>High exercise</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Save $3,400/Year</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Save 54 Hours/Year</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Reduce CO₂ by 80%</div>
    </div>
  </section>
);

export default ComparisonSection;

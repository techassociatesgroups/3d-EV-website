const PromoSection = () => (
  <section className="bg-blue-900 text-white py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Early Adopter Pricing Ends Soon</h2>
    <p className="text-lg max-w-2xl mb-8">Lock in exclusive savings and premium benefits available only to our first 500 customers. Don't miss this opportunity to join the electric revolution.</p>
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Save $500 on your purchase</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Free premium accessories ($300 value)</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Extended 5-year warranty</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Priority delivery & setup</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Lifetime maintenance discounts</div>
    </div>
    <div className="bg-white text-blue-900 rounded-lg p-6 shadow max-w-md mx-auto mb-8">
      <div className="text-2xl font-bold mb-2">Regular Price <span className="line-through text-gray-400 ml-2">$2,999</span></div>
      <div className="text-3xl font-bold text-blue-600 mb-2">Early Adopter Price $2,499</div>
      <button className="w-full bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow mt-4">Claim Your Discount Now</button>
    </div>
    <div className="text-lg font-semibold mb-2">Offer Expires In:</div>
    <div className="flex justify-center gap-4 text-2xl font-mono mb-4">
      <div className="bg-blue-800 rounded-lg px-4 py-2">03 DAYS</div>
      <div className="bg-blue-800 rounded-lg px-4 py-2">03 HOURS</div>
      <div className="bg-blue-800 rounded-lg px-4 py-2">30 MINUTES</div>
      <div className="bg-blue-800 rounded-lg px-4 py-2">06 SECONDS</div>
    </div>
    <div className="text-gray-300 mb-2">Spots Claimed <span className="font-bold text-white">347/500</span></div>
    <div className="text-gray-300 mb-8">Only 153 spots remaining at this price</div>
    <div className="flex flex-wrap justify-center gap-8">
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Free nationwide shipping</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">30-day money-back guarantee</div>
      <div className="bg-blue-100 text-blue-900 rounded-lg px-6 py-3 font-semibold">Secure checkout</div>
    </div>
  </section>
);

export default PromoSection;

const TestimonialsSection = () => (
  <section className="bg-gray-900 text-white py-16 px-4 flex flex-col items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Real Riders, <span className="text-blue-400">Real Results</span></h2>
    <p className="text-lg max-w-2xl mb-8">Join 50,000+ riders who have transformed their daily commute and saved thousands on transportation costs.</p>
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow max-w-xs">
        <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1d4622a21-1763293382009.png" alt="Sarah Chen" className="w-24 h-24 rounded-full mb-4 object-cover" />
        <h3 className="text-xl font-semibold">Sarah Chen</h3>
        <div className="text-gray-400 text-sm mb-2">Marketing Director, TechCorp</div>
        <div className="flex gap-4 text-blue-300 text-sm mb-2">
          <span>45 min/day Saved</span>
          <span>$3,400/year Saved</span>
          <span>8,500+ Miles</span>
        </div>
        <p className="text-gray-300 text-sm">"Switching to an EV bike transformed my daily commute. I save 45 minutes every day by using bike lanes, and my annual transportation costs dropped from $4,200 to just $800. The environmental impact alone makes it worth it."</p>
      </div>
      <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow max-w-xs">
        <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1ffbd3bcf-1763294660912.png" alt="Testimonial 2" className="w-24 h-24 rounded-full mb-4 object-cover" />
        <h3 className="text-xl font-semibold">James Carter</h3>
        <div className="text-gray-400 text-sm mb-2">Software Engineer</div>
        <div className="flex gap-4 text-blue-300 text-sm mb-2">
          <span>30 min/day Saved</span>
          <span>$2,800/year Saved</span>
          <span>6,200+ Miles</span>
        </div>
        <p className="text-gray-300 text-sm">"The EV bike is a game changer for city commuting. I spend less time in traffic and more time with my family. Highly recommend!"</p>
      </div>
      <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow max-w-xs">
        <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1ca0f28df-1763300712500.png" alt="Testimonial 3" className="w-24 h-24 rounded-full mb-4 object-cover" />
        <h3 className="text-xl font-semibold">Maria Lopez</h3>
        <div className="text-gray-400 text-sm mb-2">Project Manager</div>
        <div className="flex gap-4 text-blue-300 text-sm mb-2">
          <span>25 min/day Saved</span>
          <span>$2,500/year Saved</span>
          <span>5,000+ Miles</span>
        </div>
        <p className="text-gray-300 text-sm">"I love the freedom and savings my EV bike provides. No more parking hassles and I feel great about reducing my carbon footprint."</p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      <div className="text-3xl font-bold">50,000+</div>
      <div className="text-gray-400">Happy Riders</div>
      <div className="text-3xl font-bold">2.5M</div>
      <div className="text-gray-400">Tons CO₂ Saved</div>
      <div className="text-3xl font-bold">4.9/5</div>
      <div className="text-gray-400">Average Rating</div>
    </div>
  </section>
);

export default TestimonialsSection;

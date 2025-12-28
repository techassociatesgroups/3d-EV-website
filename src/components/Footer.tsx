const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 py-12 px-4 flex flex-col items-center text-center mt-8">
    <div className="flex flex-wrap justify-center gap-12 mb-8">
      <div>
        <h4 className="text-lg font-semibold text-white mb-2">Products</h4>
        <ul className="space-y-1">
          <li>Electric Bikes</li>
          <li>Accessories</li>
          <li>Batteries</li>
          <li>Spare Parts</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-2">Support</h4>
        <ul className="space-y-1">
          <li>Help Center</li>
          <li>Warranty</li>
          <li>Shipping Info</li>
          <li>Returns</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-2">Company</h4>
        <ul className="space-y-1">
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Sustainability</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
    <div className="text-sm mb-2">© 2025 EV Bike Pro. All rights reserved.</div>
    <div className="flex flex-wrap justify-center gap-4 text-xs">
      <span>Privacy Policy</span>
      <span>Terms of Service</span>
      <span>Cookie Policy</span>
    </div>
  </footer>
);

export default Footer;

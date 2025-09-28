import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Column */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Walidos LLC</h3>
            <div className="text-sm text-gray-300 space-y-1 mt-2">
                <p>212 N. 2nd St. STE 100, Richmond, KY 40475</p>
                <p><a href="tel:+212 706063437" className="hover:text-gold">+212 706063437</a></p>
                <p>EMAIL: contact@walidosllcagency.info</p>
            </div>
            <p className="text-sm text-gray-300 mt-4">© {new Date().getFullYear()} Walidos LLC. All rights reserved.</p>
            <p className="text-sm text-gray-300 mt-1">Registered in the Commonwealth of Kentucky.</p>
            <p className="text-sm text-gray-300 mt-1">EIN: 33-2175151</p>
          </div>

          {/* Center Column */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors duration-300">About</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors duration-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-2">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-gold transition-colors duration-300">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-gold transition-colors duration-300">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
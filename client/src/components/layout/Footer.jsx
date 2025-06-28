import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3E5747] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center mb-4">
              <Leaf className="mr-2 text-[#DCAF3B]" size={28} />
              <div>
                <span className="font-montserrat font-bold text-xl text-white">Vedshree</span>
                <span className="font-montserrat text-xs text-white/80 block -mt-1">Ayurvedic</span>
              </div>
            </Link>
            <p className="text-[#EFEEE9] mb-6 text-sm">
              Discover the ancient wisdom of Ayurveda with our premium products and expert consultations. Bringing balance and wellness to your life through natural healing.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="#" className="text-white hover:text-[#E4C36C] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#E4C36C] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#E4C36C] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[#EFEEE9] hover:text-[#E4C36C] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-[#EFEEE9] hover:text-[#E4C36C] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-[#EFEEE9] hover:text-[#E4C36C] transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/consultancy" className="text-[#EFEEE9] hover:text-[#E4C36C] transition-colors">Consultancy</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#EFEEE9] hover:text-[#E4C36C] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-[#EFEEE9] hover:text-[#E4C36C] transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/policy" className="text-[#EFEEE9] hover:text-[#E4C36C] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/policy#shipping" className="text-[#EFEEE9] hover:text-[#E4C36C] transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/policy#refund" className="text-[#EFEEE9] hover:text-[#E4C36C] transition-colors">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-[#E4C36C] flex-shrink-0" />
                <span className="text-[#EFEEE9]">123 Ayurveda Lane, Green Hills Colony, Mhow, Madhya Pradesh - 400000</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#E4C36C] flex-shrink-0" />
                <span className="text-[#EFEEE9]">+91 00000 00000</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#E4C36C] flex-shrink-0" />
                <span className="text-[#EFEEE9]">info@vedshree.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-[#D0CCBD]">
          <p>&copy; {new Date().getFullYear()} Vedshree Ayurvedic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
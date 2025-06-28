import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-[#ECEFE9] to-[#D9DFD3] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4046786/pexels-photo-4046786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="inline-block bg-[#B85C38]/10 text-[#96492D] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Natural Healing & Wellness
            </span>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-[#1F2D24] leading-tight mb-4">
              Ancient Wisdom for <br />
              <span className="text-[#B85C38]">Modern Wellness</span>
            </h1>
            <p className="text-[#6A6657] text-lg mb-8 max-w-lg">
              Discover the transformative power of authentic Ayurvedic remedies, 
              personalized consultations, and natural products that nurture your 
              body, mind, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={'/products'}>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {}}
              >
                Explore Products
              </Button>
              </Link>
              <Link to="/login" className="group inline-flex items-center font-medium text-[#3E5747] hover:text-[#3E5747] transition-colors">
                Login
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-[#E4C36C]/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-40 md:h-40 bg-[#8EA081]/20 rounded-full z-0"></div>
              <img 
                src="https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ayurvedic herbs and treatments" 
                className="rounded-lg shadow-xl w-full max-w-md object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
import React from 'react';
import { Leaf, Users, Sparkles, ShieldCheck } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    icon: <Leaf className="w-10 h-10 text-[#4D6A59]" />,
    title: "Authentic Ayurvedic Products",
    description: "Our products are made using traditional Ayurvedic methods and premium quality herbs sourced directly from trusted farmers."
  },
  {
    icon: <Users className="w-10 h-10 text-[#4D6A59]" />,
    title: "Expert Consultations",
    description: "Our team of experienced Ayurvedic practitioners provide personalized consultations based on your unique constitution."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-[#4D6A59]" />,
    title: "Holistic Wellness Approach",
    description: "We focus on treating the root cause rather than just the symptoms, bringing harmony to your body, mind, and spirit."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#4D6A59]" />,
    title: "Quality Assured",
    description: "All our products undergo rigorous quality checks and are certified for purity, potency, and effectiveness."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Why Choose Vedshree Ayurvedic?"
          subtitle="We combine ancient wisdom with modern research to bring you authentic Ayurvedic solutions."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#F7F6F4] p-6 rounded-lg border border-[#EFEEE9] hover:shadow-md transition-shadow duration-300 hover:border-[#B3BFAA]"
            >
              <div className="w-16 h-16 bg-[#ECEFE9] rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2 text-[#1F2D24]">{feature.title}</h3>
              <p className="text-[#8D8874]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
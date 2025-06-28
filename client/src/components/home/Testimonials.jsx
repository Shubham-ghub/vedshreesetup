import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import SectionTitle from '../ui/SectionTitle';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-[#ECEFE9]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="What Our Clients Say"
          subtitle="Discover how Vedshree Ayurvedic has transformed the health and wellness of our clients."
          centered
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 md:-left-12 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#3E5747] hover:bg-[#ECEFE9] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#D9DFD3]">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#B85C38] rounded-full flex items-center justify-center text-white">
                      <Quote size={16} />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-[#6A6657] italic mb-4">{testimonials[activeIndex].content}</p>
                  <div>
                    <h4 className="font-montserrat font-semibold text-[#1F2D24]">{testimonials[activeIndex].name}</h4>
                    <p className="text-[#B0AA91] text-sm">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-12 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[#3E5747] hover:bg-[#ECEFE9] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-[#B85C38]' : 'bg-[#D0CCBD]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
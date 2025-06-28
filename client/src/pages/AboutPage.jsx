import React from 'react';
import { Leaf, HeartPulse, Sparkle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { doctors } from '../data/doctors';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#ECEFE9] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-[#1F2D24] mb-4">
                Our <span className="text-[#B85C38]">Story</span>
              </h1>
              <p className="text-[#6A6657] text-lg mb-6 max-w-lg">
                At Vedshree Ayurvedic, we're dedicated to preserving and sharing the ancient wisdom of Ayurveda while making it accessible for modern lifestyles.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/6707556/pexels-photo-6707556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ayurvedic herbs and ingredients" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Our Mission"
            subtitle="We strive to blend ancient Ayurvedic wisdom with modern science to create effective, natural solutions for holistic well-being."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-[#ECEFE9] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#4D6A59] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Leaf size={28} />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-[#1F2D24]">Authentic Products</h3>
              <p className="text-[#8D8874]">
                We source the finest herbs and follow traditional Ayurvedic formulations to create authentic, effective products.
              </p>
            </div>
            
            <div className="bg-[#ECEFE9] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#B85C38] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <HeartPulse size={28} />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-[#1F2D24]">Holistic Healthcare</h3>
              <p className="text-[#8D8874]">
                We believe in treating the root cause, not just the symptoms, addressing the well-being of body, mind, and spirit.
              </p>
            </div>
            
            <div className="bg-[#ECEFE9] p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#D4A84B] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Sparkle size={28} />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-[#1F2D24]">Sustainable Practices</h3>
              <p className="text-[#8D8874]">
                We're committed to sustainable sourcing, eco-friendly packaging, and minimizing our environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#F7F6F4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <SectionTitle 
                title="Our Journey"
                subtitle="From a small family tradition to a trusted name in Ayurvedic wellness."
              />
              <p className="text-[#6A6657] mb-4">
                Vedshree Ayurvedic was founded in 2010 by Dr. Ramesh Patel, a third-generation Ayurvedic practitioner who wanted to share his family's traditional remedies with a wider audience.
              </p>
              <p className="text-[#6A6657] mb-4">
                What began as a small clinic offering personalized consultations has now grown into a comprehensive Ayurvedic wellness center with a range of authentic products that are shipped nationwide.
              </p>
              <p className="text-[#6A6657]">
                Despite our growth, we remain committed to our founding principles: authentic formulations, personalized care, and the belief that true health comes from balance in all aspects of life.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/4046770/pexels-photo-4046770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Ayurvedic clinic" 
                  className="rounded-lg h-48 object-cover w-full"
                />
                <img 
                  src="https://images.pexels.com/photos/4210313/pexels-photo-4210313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Herbal formulations" 
                  className="rounded-lg h-48 object-cover w-full"
                />
                <img 
                  src="https://images.pexels.com/photos/6692460/pexels-photo-6692460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Ayurvedic herbs" 
                  className="rounded-lg h-48 object-cover w-full"
                />
                <img 
                  src="https://images.pexels.com/photos/4210342/pexels-photo-4210342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Traditional preparation" 
                  className="rounded-lg h-48 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Meet Our Practitioners"
            subtitle="Our team of experienced Ayurvedic doctors is dedicated to your holistic wellness."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {doctors.map(doctor => (
              <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-[#EFEEE9] hover:shadow-lg transition-shadow">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-[#1F2D24] mb-1">{doctor.name}</h3>
                  <p className="text-[#96492D] text-sm mb-3">{doctor.specialization}</p>
                  <p className="text-[#8D8874] text-sm mb-4">{doctor.education} • {doctor.experience}</p>
                  
                  <h4 className="font-medium text-[#3E5747] mb-2">Expertise:</h4>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {doctor.expertise.map((area, index) => (
                      <li key={index} className="bg-[#ECEFE9] text-[#3E5747] text-xs px-2 py-1 rounded">
                        {area}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium text-[#3E5747] mb-2">Available on:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {doctor.availability.map((day, index) => (
                      <li key={index} className="bg-[#F7F6F4] text-[#6A6657] text-xs px-2 py-1 rounded">
                        {day}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
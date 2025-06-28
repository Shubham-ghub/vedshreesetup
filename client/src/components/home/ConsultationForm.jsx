import React, { useState } from 'react';
import { Calendar, Clock, Send } from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
// import { ConsultationFormData } from '../../types';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    concernDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          concernDetails: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-[#F7F6F4]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Book Your Consultation"
          subtitle="Take the first step towards holistic wellness with a personalized Ayurvedic consultation."
          centered
        />
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div 
              className="bg-[#3E5747] text-white p-8 flex flex-col justify-center relative"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(77, 106, 89, 0.9), rgba(77, 106, 89, 0.95)), url('https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 className="font-montserrat font-semibold text-2xl mb-4">Why Consult with Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#DCAF3B] flex items-center justify-center text-[#1F2D24] font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <p>Personalized assessment based on your unique constitution (Prakriti)</p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#DCAF3B] flex items-center justify-center text-[#1F2D24] font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <p>Customized diet and lifestyle recommendations</p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#DCAF3B] flex items-center justify-center text-[#1F2D24] font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <p>Natural remedies for chronic and acute health concerns</p>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-[#DCAF3B] flex items-center justify-center text-[#1F2D24] font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <p>Experienced Ayurvedic practitioners with years of expertise</p>
                </li>
              </ul>
            </div>
            
            <div className="p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-[#1F2D24] mb-2">Thank You!</h3>
                  <p className="text-[#8D8874]">Your consultation request has been received. We'll contact you shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#6A6657] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#6A6657] mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#6A6657] mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                        placeholder="Your Phone"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-[#6A6657] mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                          required
                        />
                        <Calendar size={18} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#B0AA91]" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-[#6A6657] mb-1">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59] appearance-none"
                          required
                        >
                          <option value="">Select Time</option>
                          <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                          <option value="Afternoon (12PM - 3PM)">Afternoon (12PM - 3PM)</option>
                          <option value="Evening (3PM - 6PM)">Evening (3PM - 6PM)</option>
                        </select>
                        <Clock size={18} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#B0AA91]" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="concernDetails" className="block text-sm font-medium text-[#6A6657] mb-1">
                      Health Concerns
                    </label>
                    <textarea
                      id="concernDetails"
                      name="concernDetails"
                      value={formData.concernDetails}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                      placeholder="Please describe your health concerns briefly"
                      required
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    className="mt-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Schedule Consultation
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
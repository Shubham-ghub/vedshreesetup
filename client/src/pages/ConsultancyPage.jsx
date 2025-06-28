import React, { useState } from 'react';
import { Calendar, Clock, Leaf, Users, Award, Sparkles, Stethoscope, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { doctors } from '../data/doctors';

const consultationTypes = [
  {
    id: "general",
    title: "General Wellness",
    description: "A comprehensive assessment of your constitution and health concerns with personalized recommendations.",
    duration: "45 minutes",
    price: 1500,
    icon: <Leaf className="w-6 h-6" />
  },
  {
    id: "specific",
    title: "Specific Concern",
    description: "Focused consultation targeting a specific health concern with targeted Ayurvedic solutions.",
    duration: "30 minutes",
    price: 1200,
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    id: "followup",
    title: "Follow-Up Session",
    description: "Review your progress and make adjustments to your personalized wellness plan.",
    duration: "20 minutes",
    price: 800,
    icon: <CheckCircle className="w-6 h-6" />
  }
];

const ConsultancyPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedType, setSelectedType] = useState("general");
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

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctor(doctorId);
  };

  const handleTypeSelect = (typeId) => {
    setSelectedType(typeId);
  };

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
        setSelectedDoctor("");
        setSelectedType("general");
      }, 3000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#ECEFE9] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-[#1F2D24] mb-4">
              Personalized <span className="text-[#B85C38]">Ayurvedic Consultations</span>
            </h1>
            <p className="text-[#6A6657] text-lg mb-6">
              Begin your journey to holistic wellness with our expert Ayurvedic practitioners.
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Our Consultation Process"
            subtitle="Experience a comprehensive approach to wellness that addresses your unique constitution and health concerns."
            centered
          />

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-[#4D6A59] text-white flex items-center justify-center text-xl font-semibold mb-4">1</div>
              <h3 className="font-montserrat font-medium text-lg text-[#1F2D24] mb-2">Initial Assessment</h3>
              <p className="text-[#8D8874] max-w-xs">Complete a detailed questionnaire about your health history and current concerns.</p>
            </div>
            
            <div className="hidden md:block w-16 h-0.5 bg-[#B3BFAA]"></div>
            
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-[#4D6A59] text-white flex items-center justify-center text-xl font-semibold mb-4">2</div>
              <h3 className="font-montserrat font-medium text-lg text-[#1F2D24] mb-2">Consultation</h3>
              <p className="text-[#8D8874] max-w-xs">Meet with our Ayurvedic doctor for a detailed assessment of your prakruti (constitution).</p>
            </div>
            
            <div className="hidden md:block w-16 h-0.5 bg-[#B3BFAA]"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#4D6A59] text-white flex items-center justify-center text-xl font-semibold mb-4">3</div>
              <h3 className="font-montserrat font-medium text-lg text-[#1F2D24] mb-2">Personalized Plan</h3>
              <p className="text-[#8D8874] max-w-xs">Receive a customized wellness plan including diet, lifestyle, and herbal recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Consultations */}
      <section className="py-16 bg-[#F7F6F4]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Why Choose Our Consultations"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EFEEE9]">
              <div className="w-12 h-12 bg-[#D9DFD3] rounded-full flex items-center justify-center text-[#3E5747] mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">Experienced Practitioners</h3>
              <p className="text-[#8D8874]">Our doctors have years of experience and are well-versed in both traditional Ayurveda and modern medical knowledge.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EFEEE9]">
              <div className="w-12 h-12 bg-[#D9DFD3] rounded-full flex items-center justify-center text-[#3E5747] mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">Authentic Approach</h3>
              <p className="text-[#8D8874]">We follow traditional Ayurvedic principles while making them accessible and practical for modern lifestyles.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EFEEE9]">
              <div className="w-12 h-12 bg-[#D9DFD3] rounded-full flex items-center justify-center text-[#3E5747] mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">Holistic Solutions</h3>
              <p className="text-[#8D8874]">We don't just treat symptoms but address the root cause for lasting health and wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Book Your Consultation"
            subtitle="Select your preferred practitioner, consultation type, and schedule your session."
            centered
          />

          <div className="max-w-4xl mx-auto mt-10">
            {isSubmitted ? (
              <div className="bg-[#2ECC71]/10 border border-[#2ECC71] rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-[#1F2D24] mb-2">Consultation Scheduled Successfully!</h3>
                <p className="text-[#8D8874] mb-4">
                  Thank you for booking a consultation with Vedshree Ayurvedic. You will receive a confirmation email shortly with all the details.
                </p>
                <Button 
                  variant="primary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Book Another Consultation
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md border border-[#EFEEE9] overflow-hidden">
                <div className="p-6 bg-[#ECEFE9] border-b border-[#E0DDD3]">
                  <h3 className="font-montserrat font-semibold text-xl text-[#1F2D24]">Step 1: Select Consultation Type</h3>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {consultationTypes.map(type => (
                      <div 
                        key={type.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                          selectedType === type.id 
                            ? 'border-[#4D6A59] bg-[#ECEFE9]' 
                            : 'border-[#E0DDD3] hover:border-[#8EA081]'
                        }`}
                        onClick={() => handleTypeSelect(type.id)}
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                            selectedType === type.id ? 'bg-[#4D6A59] text-white' : 'bg-[#EFEEE9] text-[#3E5747]'
                          }`}>
                            {type.icon}
                          </div>
                          <h4 className="font-montserrat font-medium text-[#1F2D24]">{type.title}</h4>
                        </div>
                        <p className="text-[#8D8874] text-sm mb-2">{type.description}</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-[#B0AA91]">Duration: {type.duration}</span>
                          <span className="font-medium text-[#96492D]">₹{type.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-[#ECEFE9] border-b border-[#E0DDD3]">
                  <h3 className="font-montserrat font-semibold text-xl text-[#1F2D24]">Step 2: Select Practitioner</h3>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {doctors.map(doctor => (
                      <div 
                        key={doctor.id}
                        className={`border rounded-lg overflow-hidden cursor-pointer transition-shadow ${
                          selectedDoctor === doctor.id 
                            ? 'border-[#4D6A59] shadow-md' 
                            : 'border-[#E0DDD3] hover:shadow-sm'
                        }`}
                        onClick={() => handleDoctorSelect(doctor.id)}
                      >
                        <img 
                          src={doctor.image} 
                          alt={doctor.name} 
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-montserrat font-medium text-[#1F2D24]">{doctor.name}</h4>
                          <p className="text-sm text-[#96492D] mb-2">{doctor.specialization}</p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {doctor.expertise.slice(0, 2).map((exp, index) => (
                              <span key={index} className="text-xs bg-[#ECEFE9] text-[#3E5747] px-2 py-0.5 rounded">
                                {exp}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-[#B0AA91]">Available: {doctor.availability.join(', ')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-[#ECEFE9] border-b border-[#E0DDD3]">
                  <h3 className="font-montserrat font-semibold text-xl text-[#1F2D24]">Step 3: Your Details</h3>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                        required
                      />
                    </div>
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
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                        required
                      />
                    </div>
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
                  </div>
                  
                  <div className="mb-4">
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
                  
                  <div className="mb-6">
                    <label htmlFor="concernDetails" className="block text-sm font-medium text-[#6A6657] mb-1">
                      Health Concerns (Optional)
                    </label>
                    <textarea
                      id="concernDetails"
                      name="concernDetails"
                      value={formData.concernDetails}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                      placeholder="Please describe your health concerns briefly"
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting || !selectedDoctor}
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
                      "Schedule Consultation"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultancyPage;
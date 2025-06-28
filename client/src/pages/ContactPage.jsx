import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
          subject: '',
          message: ''
        });
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
              Get in <span className="text-[#B85C38]">Touch</span>
            </h1>
            <p className="text-[#6A6657] text-lg mb-6">
              Have questions about our products or services? We're here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#ECEFE9] rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#4D6A59] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">Our Location</h3>
              <p className="text-[#8D8874]">
                123 Ayurveda Lane, Green Hills Colony, Mhow, Madhya Pradesh - 400000
              </p>
            </div>
            
            <div className="bg-[#ECEFE9] rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#4D6A59] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">Phone</h3>
              <p className="text-[#8D8874] mb-1">
                +91 98765 43210
              </p>
              <p className="text-[#8D8874]">
                +91 12345 67890
              </p>
            </div>
            
            <div className="bg-[#ECEFE9] rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[#4D6A59] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">Working Hours</h3>
              <p className="text-[#8D8874] mb-1">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-[#8D8874]">
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="order-2 md:order-1">
              <SectionTitle 
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
              
              {isSubmitted ? (
                <div className="bg-[#2ECC71]/10 border border-[#2ECC71] rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-[#1F2D24] mb-2">Message Sent Successfully!</h3>
                  <p className="text-[#8D8874]">
                    Thank you for reaching out to Vedshree Ayurvedic. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 border border-[#EFEEE9]">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-[#6A6657] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#D0CCBD]rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-[#6A6657] mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#D0CCBD]rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-[#6A6657] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#D0CCBD]rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-[#6A6657] mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-[#D0CCBD]rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                      required
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
            
            <div className="order-1 md:order-2">
              <SectionTitle 
                title="Find Us Here"
                subtitle="Visit our store or clinic for a personal consultation."
              />
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#EFEEE9] h-96">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235938.40291129772!2d75.63296275604964!3d22.484006339059775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f6b7ce656ac3%3A0xaad2f44329717968!2sMhow%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1749120644142!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vedshree Ayurvedic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#ECEFE9]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find answers to commonly asked questions about our products and services."
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-10">
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">What are your shipping timelines?</h3>
                <p className="text-[#8D8874]">
                  We typically process orders within 24-48 hours. Delivery time depends on your location, but most domestic orders are delivered within 3-5 business days.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">Do you offer international shipping?</h3>
                <p className="text-[#8D8874]">
                  Yes, we ship internationally to select countries. International shipping typically takes 7-14 business days, depending on the destination and customs processing.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">What is your return policy?</h3>
                <p className="text-[#8D8874]">
                  We accept returns within 30 days of delivery for unopened products in their original packaging. Please contact our customer service team to initiate a return.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">Are your products certified?</h3>
                <p className="text-[#8D8874]">
                  Yes, all our products are certified by the Ministry of AYUSH and follow GMP (Good Manufacturing Practices) guidelines. We also conduct third-party testing for quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ConsultationForm from '../components/home/ConsultationForm';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Testimonials />
      <ConsultationForm />
    </div>
  );
};

export default HomePage;
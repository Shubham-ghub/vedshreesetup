import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../products/ProductCard';

const FeaturedProducts = () => {
  // Select the first 3 products to display
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <SectionTitle 
            title="Our Featured Products"
            subtitle="Discover our most popular Ayurvedic remedies, carefully crafted for your wellness."
            className="md:mb-0"
          />
          <Link 
            to="/products" 
            className="group inline-flex items-center font-medium text-[#B85C38] hover:text-[#96492D] transition-colors"
          >
            View All Products
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
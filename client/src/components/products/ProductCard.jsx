import React from 'react';
import { Link } from 'react-router-dom';
// import { Product } from '../../types';

// interface ProductCardProps {
//   product: Product;
// }

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#EFEEE9] group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      <div className="absolute top-2 right-2 bg-[#4D6A59] text-white text-xs font-semibold px-2 py-1 rounded">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-montserrat font-semibold text-xl text-[#1F2D24] mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-[#8D8874] text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-[#96492D] font-medium">₹{product.price}</span>
          <Link 
            to={`/products/${product.id}`}
          className="bg-[#4D6A59] hover:bg-[#3E5747] text-white text-sm font-medium py-2 px-4 rounded transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
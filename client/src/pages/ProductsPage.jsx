import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ProductCard from '../components/products/ProductCard';
import { products, productCategories } from '../data/products';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#ECEFE9] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-[#1F2D24] mb-4">
              Our <span className="text-[#B85C38]">Products</span>
            </h1>
            <p className="text-[#6A6657] text-lg mb-6">
              Discover our range of authentic Ayurvedic products crafted with traditional wisdom and modern research.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-[#F7F6F4] rounded-lg p-6 sticky top-24">
                <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-4">Search Products</h3>
                <div className="relative mb-6">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                  />
                  <Search size={18} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#C0BBA7]" />
                </div>
                
                <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-4">Categories</h3>
                <div className="space-y-2">
                  {productCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#4D6A59] text-white font-medium'
                          : 'text-[#6A6657] hover:bg-[#ECEFE9]'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-montserrat font-bold text-2xl text-[#1F2D24]">
                  {selectedCategory === "all"
                    ? "All Products"
                    : productCategories.find(cat => cat.id === selectedCategory)?.name || "Products"}
                </h2>
                <p className="text-[#8D8874]">Showing {filteredProducts.length} products</p>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="bg-[#F7F6F4] rounded-lg p-8 text-center">
                  <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">No Products Found</h3>
                  <p className="text-[#8D8874] mb-4">We couldn't find any products matching your search criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="text-[#3E5747] hover:text-[#2F4435] font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
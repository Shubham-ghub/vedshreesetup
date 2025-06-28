import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ChevronLeft, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId]);

  const handleAddToCart = () => {
    setAddedToCart(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0 && value <= (product?.stock || 1)) {
      setQuantity(value);
    }
  };

  if (!product) {
    return (
      <div className="pt-28 pb-16 min-h-screen bg-[#F7F6F4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="font-montserrat font-bold text-2xl text-[#1F2D24] mb-4">Product Not Found</h2>
            <p className="text-[#8D8874] mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/products')}
            >
              Back to Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 bg-[#F7F6F4]">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-[#3E5747] hover:text-[#2F4435] mb-6">
          <ChevronLeft size={16} className="mr-1" />
          Back to Products
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-8">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="p-6 md:p-8 flex flex-col">
              <div>
                <span className="inline-block bg-[#D9DFD3] text-[#1F2D24] text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                <h1 className="font-montserrat font-bold text-2xl md:text-3xl text-[#1F2D24] mb-2">
                  {product.name}
                </h1>
                <p className="text-[#8D8874] mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-6">
                  <span className="text-[#96492D] font-bold text-2xl mr-2">₹{product.price}</span>
                  <span className={`text-sm font-medium rounded-full px-2 py-0.5 ${
                    product.stock > 10 
                      ? 'bg-[#2ECC71]/10 text-[#2ECC71]' 
                      : product.stock > 0 
                        ? 'bg-[#F39C12]/10 text-[#F39C12]' 
                        : 'bg-[#E74C3C]/10 text-[#E74C3C]'
                  }`}>
                    {product.stock > 10 
                      ? 'In Stock' 
                      : product.stock > 0 
                        ? `Only ${product.stock} left` 
                        : 'Out of Stock'}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-montserrat font-semibold text-[#1F2D24] mb-2">Benefits:</h3>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-[#4D6A59] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-[#6A6657]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {product.ingredients && (
                  <div className="mb-6">
                    <h3 className="font-montserrat font-semibold text-[#1F2D24] mb-2">Key Ingredients:</h3>
                    <p className="text-[#6A6657]">
                      {product.ingredients.join(', ')}
                    </p>
                  </div>
                )}
                
                {product.usage && (
                  <div className="mb-6">
                    <h3 className="font-montserrat font-semibold text-[#1F2D24] mb-2">Recommended Usage:</h3>
                    <p className="text-[#6A6657]">
                      {product.usage}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-24">
                    <label htmlFor="quantity" className="block text-sm font-medium text-[#6A6657] mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      max={product.stock}
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-full px-3 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <Button
                      variant="secondary"
                      size="lg"
                      fullWidth
                      onClick={handleAddToCart}
                      disabled={product.stock === 0 || addedToCart}
                    >
                      {addedToCart ? (
                        <span className="flex items-center">
                          <Check size={18} className="mr-2" />
                          Added to Cart
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <ShoppingCart size={18} className="mr-2" />
                          Add to Cart
                        </span>
                      )}
                    </Button>
                  </div>
                  
                  <button
                    className="w-12 h-12 flex items-center justify-center border border-[#E0DDD3] rounded-md hover:bg-[#F7F6F4] transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart size={20} className="text-[#B0AA91]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
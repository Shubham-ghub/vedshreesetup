import React, { useState } from 'react';
import {
  Plus, Filter, Search, Edit, Trash2,
  ChevronLeft, ChevronRight, Image, Star, ArrowUpDown
} from 'lucide-react';
import PageHeader from '../admincomponents/PageHeader';
import Card from '../admincomponents/Card';
import { motion } from 'framer-motion';
import { desc } from 'framer-motion/client';

const initialProducts = [
  {
    id: 1,
    name: 'Ashwagandha Powder',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Herbs',
    price: 350,
    stock: 45,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/6693662/pexels-photo-6693662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Triphala Churna',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Supplements',
    price: 275,
    stock: 32,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/6694876/pexels-photo-6694876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Brahmi Oil',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Oils',
    price: 420,
    stock: 18,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/6693723/pexels-photo-6693723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Neem Capsules',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Supplements',
    price: 310,
    stock: 0,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/7579830/pexels-photo-7579830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Chyawanprash',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Supplements',
    price: 450,
    stock: 24,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/6694168/pexels-photo-6694168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'Tulsi Tea',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Teas',
    price: 150,
    stock: 56,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/5501162/pexels-photo-5501162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    name: 'Chyawanprash',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Supplements',
    price: 450,
    stock: 24,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/6694168/pexels-photo-6694168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 8,
    name: 'Chyawanprash',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Supplements',
    price: 450,
    stock: 24,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/6694168/pexels-photo-6694168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 9,
    name: 'Chyawanprash',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Supplements',
    price: 450,
    stock: 24,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/6694168/pexels-photo-6694168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 10,
    name: 'Chyawanprash',
    desc: 'A traditional herb known for its adaptogenic properties, helping to reduce stress and improve overall well-being.',
    benefits: 'Helps reduce stress, boosts energy levels, and supports mental clarity.',
    ingredients: '100% pure Ashwagandha root powder.',
    usage: 'Mix 1 teaspoon with warm milk or water, preferably before bedtime.',
    category: 'Supplements',
    price: 450,
    stock: 24,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/6694168/pexels-photo-6694168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

function Products() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ id: 0, name: '', desc: '' });
  const [editMode, setEditMode] = useState(false);

  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const categories = ['all', ...new Set(products.map(product => product.category))];

  // Filtering products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Sorting products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortBy === 'rating') {
      return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
    }
    return 0;
  });

  const handleSortClick = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const handleAddNewClick = () => {
    setFormData({ id: 0, name: '', desc: '' });
    setEditMode(false);
    setShowForm(true);
  };

  const handleEditClick = (category) => {
    setFormData({ id: category.id, name: category.name, category: category.category, price: category.price, stock: category.stock });
    setEditMode(true);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      setProducts(categories.map(cat =>
        cat.id === formData.id ? { ...cat, name: formData.name, desc: formData.desc } : cat
      ));
    } else {
      const newId = Math.max(...categories.map(c => c.id)) + 1;
      setProducts([...categories, { id: newId, name: formData.name, desc: formData.desc, products: 0 }]);
    }

    setShowForm(false);
    setFormData({ id: 0, name: '', desc: '' });
  };

  const handleDeleteClick = (id) => {
    setProducts(categories.filter(cat => cat.id !== id));
  };

  return (
    <div>
      <PageHeader
        title="Products"
        description="Manage your product inventory"
        actions={
          <button className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90 flex items-center gap-2" onClick={handleAddNewClick}>
            <Plus size={16} />
            <span>Add New Product</span>
          </button>
        }
      />

      <Card>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87a186]/60" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3  ">
            <select
              className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            {/* <button className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm  border border-[#0E2A10] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-white flex items-center gap-2">
              <Filter size={16} />
              <span>More Filters</span>
            </button> */}
          </div>
        </div>

        {showForm && (
            <motion.div
              className="mb-6 p-4 border border-[#87a186]/20 rounded-md bg-[#0E2A10]/5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-medium text-[#0E2A10] mb-4">
                {editMode ? 'Edit Product' : 'Add New Product'}
              </h3>
              <form method='post' onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                      Product Image
                    </label>
                    <input
                      type="file"
                      className="w-full  border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white file:bg-[#0E2A10]  file:mr-4 file:px-10 file:py-2 file:rounded-md  file:text-white hover:file:bg-[#0E2A10]/80"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                      Description
                    </label>
                    <input
                      type="textarea"
                      className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                      value={formData.Category}
                      onChange={(e) => setFormData({ ...formData, Category: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                      Benefits
                    </label>
                    <input
                      type="textarea"
                      className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                      Ingredients
                    </label>
                    <input
                      type="textarea"
                      className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                      Usage
                    </label>
                    <input
                      type="textarea"
                      className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                      Price
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                      value={formData.Price}
                      onChange={(e) => setFormData({ ...formData, Price: e.target.value })}
                    />
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                      Stock
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm border border-[#0E2A10] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-white w-full"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90 w-full"
                  >
                    {editMode ? 'Update Category' : 'Add Category'}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

        <div className="overflow-x-auto">
          <table className="w-full min-w-full text-left">
            <thead>
              <tr>
                {/* <th>Id</th> */}
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Image</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3 cursor-pointer' onClick={() => handleSortClick('name')} >
                  <div className="flex items-center gap-2">
                    <span>Product Name</span>
                    {sortBy === 'name' && (
                      <ArrowUpDown size={14} className="text-white/70" />
                    )}
                  </div>
                </th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Discription</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Category</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3 cursor-pointer' onClick={() => handleSortClick('price')} >
                  <div className="flex items-center gap-2">
                    <span>Price</span>
                    {sortBy === 'price' && (
                      <ArrowUpDown size={14} className="text-white/70" />
                    )}
                  </div>
                </th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Benefits</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Ingredients</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Usage</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Stock</th>
                {/* <th onClick={() => handleSortClick('rating')} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span>Rating</span>
                    {sortBy === 'rating' && (
                      <ArrowUpDown size={14} className="text-white/70" />
                    )}
                  </div>
                </th> */}
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product) => (
                <tr key={product.id}>
                  {/* <td className="text-[#87a186] font-medium">{product.id}</td> */}
                  <td>
                    {product.image ? (
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-[#0E2A10]/5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-md bg-[#0E2A10]/5 flex items-center justify-center">
                        <Image size={18} className="text-[#87a186]/50" />
                      </div>
                    )}
                  </td>
                  <td className="font-medium text-[#0E2A10]">{product.name}</td>
                  <td className="text-[#87a186]/70">{product.desc || 'No description available'}</td>
                  <td>{product.category}</td>
                  <td>₹{product.price.toFixed(2)}</td>
                  <td className="text-[#87a186]/70">{product.benefits}</td>
                  <td className="text-[#87a186]/70">{product.ingredients}</td>
                  <td className="text-[#87a186]/70">{product.usage}</td>
                  <td>
                    {product.stock > 0 ? (
                      <span className={`p-1 rounded-full text-xs ${product.stock > 20 ? 'bg-green-100 text-green-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                        {product.stock} in stock
                      </span>
                    ) : (
                      <span className="p-1 rounded-full text-xs bg-red-100 text-red-700">
                        Out of stock
                      </span>
                    )}
                  </td>
                  {/* <td>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span>{product.rating}</span>
                    </div>
                  </td> */}
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="py-1 hover:bg-[#0E2A10]/10 rounded-md"
                      onClick={() => handleEditClick(products)}>
                        <Edit size={16} className="text-[#87a186]" />
                      </button>
                      <button className="py-1 hover:bg-red-50 rounded-md">
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {sortedProducts.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-[#87a186]/60">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-[#87a186]/70">
            Showing {sortedProducts.length} of {products.length} products
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md hover:bg-[#0E2A10]/10 disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft size={16} className="text-[#87a186]" />
            </button>
            <button className="px-3 py-1 rounded-md bg-[#0E2A10] text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-[#0E2A10]/10">
              2
            </button>
            <button className="p-2 rounded-md hover:bg-[#0E2A10]/10">
              <ChevronRight size={16} className="text-[#87a186]" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Products;
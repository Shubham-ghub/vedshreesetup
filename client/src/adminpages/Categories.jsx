import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter } from 'lucide-react';
import PageHeader from '../admincomponents/PageHeader';
import Card from '../admincomponents/Card';
import { motion } from 'framer-motion';

const initialCategories = [
  { id: 1, name: 'Herbs', products: 42, desc: 'Pure ayurvedic herbs and plant extracts' },
  { id: 2, name: 'Supplements', products: 36, desc: 'Dietary supplements and vitamins' },
  { id: 3, name: 'Oils', products: 18, desc: 'Therapeutic and massage oils' },
  { id: 4, name: 'Teas', products: 24, desc: 'Herbal tea blends and infusions' },
  { id: 5, name: 'Spices', products: 15, desc: 'Medicinal spices and powders' },
  { id: 6, name: 'Wellness', products: 29, desc: 'General wellness and health products' },
];

function Categories() {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ id: 0, name: '', desc: '' });
  const [editMode, setEditMode] = useState(false);
  
  const filteredCategories = categories.filter(
    category => category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddNewClick = () => {
    setFormData({ id: 0, name: '', desc: '' });
    setEditMode(false);
    setShowForm(true);
  };
  
  const handleEditClick = (category) => {
    setFormData({ id: category.id, name: category.name, desc: category.desc });
    setEditMode(true);
    setShowForm(true);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (editMode) {
      setCategories(categories.map(cat => 
        cat.id === formData.id ? { ...cat, name: formData.name, desc: formData.desc } : cat
      ));
    } else {
      const newId = Math.max(...categories.map(c => c.id)) + 1;
      setCategories([...categories, { id: newId, name: formData.name, desc: formData.desc, products: 0 }]);
    }
    
    setShowForm(false);
    setFormData({ id: 0, name: '', desc: '' });
  };
  
  const handleDeleteClick = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };
  
  return (
    <div>
      <PageHeader 
        title="Categories" 
        description="Manage product categories"
        actions={
          <button 
            className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90 flex items-center gap-2 "
            onClick={handleAddNewClick}
          >
            <Plus size={16} />
            <span>Add New Category</span>
          </button>
        }/>
      
      <Card>
        <div className="flex flex-col md:flex-row gap-4 mb-6 ">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87a186]/60" />
            <input 
              type="text" 
              placeholder="Search categories..." 
              className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>
          {/* <button className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm border border-[#0E2A10] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-white flex items-center gap-2">
            <Filter size={16} />
            <span>Filter</span>
          </button> */}
        </div>
        
        {showForm && (
          <motion.div 
            className="mb-6 p-4 border border-[#87a186]/20 rounded-md bg-[#0E2A10]/5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-medium text-[#0E2A10] mb-4">
              {editMode ? 'Edit Category' : 'Add New Category'}
            </h3>
            <form method='post' onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                    Category Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                    Description
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                    value={formData.desc}
                    onChange={(e) => setFormData({...formData, desc: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button 
                  type="button"
                  className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm border border-[#0E2A10] text-[#0E2A10] hover:bg-[#0E2A10] hover:text-white"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90"
                >
                  {editMode ? 'Update Category' : 'Add Category'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
        
        <div className="w-full overflow-x-auto rounded-md border border-[#87a186]/10">
          <table className="w-full min-w-full text-left">
            <thead>
              <tr>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>ID</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Name</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Description</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Products</th>
                <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((category) => (
                <tr className='hover:bg-[#0E2A10]/5' key={category.id}>
                  <td className="text-[#87a186] border-t border-[#87a186]/10 px-6 py-4">{category.id}</td>
                  <td className="font-medium text-[#0E2A10] border-t border-[#87a186]/10 px-6 py-4">{category.name}</td>
                  <td className='border-t border-[#87a186]/10 px-6 py-4'>{category.desc}</td>
                  <td className='border-t border-[#87a186]/10 px-6 py-4'>{category.products}</td>
                  <td className='border-t border-[#87a186]/10 px-6 py-4'>
                    <div className="flex items-center gap-2">
                      <button 
                        className="p-1 hover:bg-[#0E2A10]/10 rounded-md"
                        onClick={() => handleEditClick(category)}
                      >
                        <Edit size={16} className="text-[#87a186]" />
                      </button>
                      <button 
                        className="p-1 hover:bg-red-50 rounded-md"
                        onClick={() => handleDeleteClick(category.id)}
                      >
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredCategories.length === 0 && (
                <tr className='hover:bg-[#0E2A10]/5'>
                  <td colSpan={4} className="border-t border-[#87a186]/10 px-6  text-center py-8 text-[#87a186]/60">
                    No categories found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default Categories;
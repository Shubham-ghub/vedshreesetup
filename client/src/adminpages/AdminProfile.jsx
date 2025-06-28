
import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter } from 'lucide-react';
import PageHeader from '../admincomponents/PageHeader';
import Card from '../admincomponents/Card';
import { motion } from 'framer-motion';

const initialCategories = [
     { id: 1, name: 'Herbs', desc: 'Pure ayurvedic herbs and plant extracts' },
     { id: 2, name: 'Supplements', desc: 'Dietary supplements and vitamins' },
     { id: 3, name: 'Oils', desc: 'Therapeutic and massage oils' },
     { id: 4, name: 'Teas', desc: 'Herbal tea blends and infusions' },

];

const AdminProfile = () => {
     const [categories, setCategories] = useState([]);
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
                    title="Admin Details"
                    description="Manage your admin profile"
                    actions={
                         <button
                              className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90 flex items-center gap-2 "
                              onClick={handleAddNewClick}>
                              <Plus size={16} />
                              <span>Add Admin Details</span>
                         </button>}
               />

               <Card>
                    {/* <div className="flex flex-col md:flex-row gap-4 mb-6 ">
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
          </button>
        </div> */}

                    {showForm && (
                         <motion.div
                              className="mb-6 p-4 border border-[#87a186]/20 rounded-md bg-[#0E2A10]/5"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                         >
                              <h3 className="text-lg font-medium text-[#0E2A10] mb-4">
                                   {editMode ? 'Edit Hero Section' : 'Add New Hero Section'}
                              </h3>
                              <form method='post' onSubmit={handleFormSubmit}>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                             <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                                                  Admin Name
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
                                                  Email Id
                                             </label>
                                             <input
                                                  type="text"
                                                  className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                                                  value={formData.desc}
                                                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                                             />
                                        </div>
                                        <div>
                                             <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                                                  Facebook Link
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
                                                  LinkedIn Link
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
                                                  Profile Image
                                             </label>
                                             <input
                                                  type="file"
                                                  className="w-full border border-[#87a186]/30 rounded-md focus:outline-none bg-white file:bg-[#0E2A10]/15 file:px-6 file:mr-5 file:py-2"
                                                  accept="image/*"
                                                  onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
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
                                             {editMode ? 'Update Admin Details' : 'Add Admin Details'}
                                        </button>
                                   </div>
                              </form>
                         </motion.div>
                    )}

                    <div className="w-full overflow-x-auto rounded-md border border-[#87a186]/10">
                         <div className='text-end mb-2 rounded-full'>
                              <button
                                   className="p-4  bg-[#0E2A10]/5 border border-[#87a186]/15 hover:bg-[#0E2A10]/10 rounded-full transition-all duration-300"
                                   onClick={() => handleEditClick(category)}
                              >
                                   <Edit size={16} className="text-[#87a186]" />
                              </button>
                         </div>
                         <div className="min-w-full  bg-[#0E2A10]/5 border-b border-[#87a186]/10">
                              <div className="flex items-center justify-center p-4 ">
                                   <img src="https://t4.ftcdn.net/jpg/07/23/14/93/360_F_723149335_tA0Fo8zefrHzYlSgXRMYHmBQk7CuWrRd.jpg" alt="" className='w-40 h-40 rounded-full' />
                              </div>
                              <div className="mb-6 mt-3 flex justify-center items-center px-4">
                                   <input type="file" className="w-full  border border-[#87a186]/30 rounded-md focus:outline-none  bg-white file:bg-[#0E2A10]/15 file:px-6 file:mr-5 file:py-2 " />
                              </div>

                         </div>
                         <form method='post'>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                                   <div>
                                        <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                                             Admin Name
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
                                             Email Id
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
                                             Facebook Link
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
                                             LinkedIn Link
                                        </label>
                                        <input
                                             type="text"
                                             className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                                             value={formData.name}
                                             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                             required
                                        />
                                   </div>


                              </div>
                         </form>
                    </div>
               </Card>
          </div>
     );
}


export default AdminProfile
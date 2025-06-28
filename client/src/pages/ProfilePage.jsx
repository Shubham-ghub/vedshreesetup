import React, { useState } from 'react';
import { User, Package, Calendar, Edit, LogOut, ChevronRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { mockUserProfile } from '../data/user-profile';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(mockUserProfile);
  const [formData, setFormData] = useState({
    name: mockUserProfile.name,
    email: mockUserProfile.email,
    phone: mockUserProfile.phone || '',
    address: mockUserProfile.address || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserProfile(prev => ({
      ...prev,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address
    }));
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setFormData({
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone || '',
      address: userProfile.address || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="pt-28 pb-16 bg-[#F7F6F4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            title="My Profile"
            subtitle="Manage your account information, orders, and consultations."
          />
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Sidebar */}
              <div className="bg-[#ECEFE9] p-6 md:p-8">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-24 h-24 bg-[#4D6A59] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                    {userProfile.name.charAt(0)}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24]">{userProfile.name}</h3>
                  <p className="text-[#8D8874] text-sm">{userProfile.email}</p>
                </div>
                
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center w-full p-3 rounded-md transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-[#4D6A59] text-white'
                        : 'text-[#6A6657] hover:bg-[#D9DFD3]'
                    }`}
                  >
                    <User size={18} className="mr-3" />
                    <span>Profile Information</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`flex items-center w-full p-3 rounded-md transition-colors ${
                      activeTab === 'orders'
                        ? 'bg-[#4D6A59] text-white'
                        : 'text-[#6A6657] hover:bg-[#D9DFD3]'
                    }`}
                  >
                    <Package size={18} className="mr-3" />
                    <span>My Orders</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('consultations')}
                    className={`flex items-center w-full p-3 rounded-md transition-colors ${
                      activeTab === 'consultations'
                        ? 'bg-[#4D6A59] text-white'
                        : 'text-[#6A6657] hover:bg-[#D9DFD3]'
                    }`}
                  >
                    <Calendar size={18} className="mr-3" />
                    <span>My Consultations</span>
                  </button>
                </nav>
                
                <div className="mt-auto pt-8">
                  <button className="flex items-center w-full p-3 text-[#6A6657] hover:bg-[#D9DFD3] rounded-md transition-colors">
                    <LogOut size={18} className="mr-3" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-3 p-6 md:p-8">
                {activeTab === 'profile' && (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="font-montserrat font-semibold text-2xl text-[#1F2D24]">Profile Information</h2>
                      {!isEditing && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsEditing(true)}
                        >
                          <Edit size={16} className="mr-2" />
                          Edit Profile
                        </Button>
                      )}
                    </div>
                    
                    {isEditing ? (
                      <form onSubmit={handleSubmit}>
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
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="address" className="block text-sm font-medium text-[#6A6657] mb-1">
                            Address
                          </label>
                          <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                          ></textarea>
                        </div>
                        
                        <div className="flex space-x-4">
                          <Button
                            type="submit"
                            variant="primary"
                          >
                            Save Changes
                          </Button>
                          
                          <Button
                            type="button"
                            variant="outline"
                            onClick={cancelEdit}
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-[#B0AA91]">Full Name</h3>
                            <p className="mt-1 text-[#46443A]">{userProfile.name}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-sm font-medium text-[#B0AA91]">Email</h3>
                            <p className="mt-1 text-[#46443A]">{userProfile.email}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-[#B0AA91]">Phone</h3>
                            <p className="mt-1 text-[#46443A]">{userProfile.phone || "-"}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-[#B0AA91]">Address</h3>
                          <p className="mt-1 text-[#46443A]">{userProfile.address || "-"}</p>
                        </div>
                      </div>
                    )}
                  </>
                )}
                
                {activeTab === 'orders' && (
                  <>
                    <h2 className="font-montserrat font-semibold text-2xl text-[#1F2D24] mb-6">My Orders</h2>
                    
                    {userProfile.orders.length === 0 ? (
                      <div className="bg-[#F7F6F4] rounded-lg p-8 text-center">
                        <Package size={48} className="mx-auto text-[#C0BBA7] mb-4" />
                        <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">No Orders Yet</h3>
                        <p className="text-[#8D8874] mb-4">
                          You haven't placed any orders yet. Start shopping to see your orders here.
                        </p>
                        <Button
                          variant="primary"
                          onClick={() => window.location.href = '/products'}
                        >
                          Browse Products
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {userProfile.orders.map(order => (
                          <div key={order.id} className="border border-[#E0DDD3] rounded-lg overflow-hidden">
                            <div className="bg-[#F7F6F4] px-4 py-3 border-b border-[#E0DDD3] flex flex-col sm:flex-row justify-between items-start sm:items-center">
                              <div>
                                <p className="text-sm text-[#B0AA91]">Order ID: <span className="font-medium text-[#6A6657]">{order.id}</span></p>
                                <p className="text-sm text-[#B0AA91]">Placed on: <span className="font-medium text-[#6A6657]">{new Date(order.date).toLocaleDateString()}</span></p>
                              </div>
                              <div className={`mt-2 sm:mt-0 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                                order.status === 'delivered' ? 'bg-[#2ECC71]/10 text-[#2ECC71]' :
                                order.status === 'shipped' ? 'bg-[#D4A84B]/10 text-[#7F652D]' :
                                order.status === 'processing' ? 'bg-[#4D6A59]/10 text-[#2F4435]' :
                                'bg-[#E74C3C]/10 text-[#E74C3C]'
                              }`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </div>
                            </div>
                            
                            <div className="p-4">
                              {order.products.map(product => (
                                <div key={product.id} className="flex items-center py-3 border-b border-[#EFEEE9] last:border-0">
                                  <div className="flex-grow">
                                    <h4 className="font-medium text-[#46443A]">{product.name}</h4>
                                    <p className="text-sm text-[#B0AA91]">Qty: {product.quantity} × ₹{product.price}</p>
                                  </div>
                                  <span className="font-medium text-[#46443A]">₹{product.quantity * product.price}</span>
                                </div>
                              ))}
                              
                              <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#E0DDD3]">
                                <span className="text-[#6A6657]">Total Amount:</span>
                                <span className="font-semibold text-lg text-[#96492D]">₹{order.totalAmount}</span>
                              </div>
                            </div>
                            
                            {order.trackingId && order.status !== 'delivered' && (
                              <div className="px-4 py-3 bg-[#F7F6F4] border-t border-[#E0DDD3]">
                                <p className="text-sm text-[#6A6657]">
                                  Tracking ID: <span className="font-medium">{order.trackingId}</span>
                                </p>
                              </div>
                            )}
                            
                            <div className="px-4 py-3 border-t border-[#E0DDD3] text-right">
                              <button className="text-[#3E5747] hover:text-[#2F4435] text-sm font-medium inline-flex items-center">
                                View Order Details
                                <ChevronRight size={16} className="ml-1" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
                
                {activeTab === 'consultations' && (
                  <>
                    <h2 className="font-montserrat font-semibold text-2xl text-[#1F2D24] mb-6">My Consultations</h2>
                    
                    {userProfile.consultations.length === 0 ? (
                      <div className="bg-[#F7F6F4] rounded-lg p-8 text-center">
                        <Calendar size={48} className="mx-auto text-[#C0BBA7] mb-4" />
                        <h3 className="font-montserrat font-semibold text-lg text-[#1F2D24] mb-2">No Consultations Yet</h3>
                        <p className="text-[#8D8874] mb-4">
                          You haven't booked any consultations yet. Schedule a consultation with our Ayurvedic experts.
                        </p>
                        <Button
                          variant="primary"
                          onClick={() => window.location.href = '/consultancy'}
                        >
                          Book Consultation
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {userProfile.consultations.map(consultation => (
                          <div key={consultation.id} className="border border-[#E0DDD3] rounded-lg overflow-hidden">
                            <div className="bg-[#F7F6F4] px-4 py-3 border-b border-[#E0DDD3] flex flex-col sm:flex-row justify-between items-start sm:items-center">
                              <div>
                                <p className="text-sm text-[#B0AA91]">Consultation with: <span className="font-medium text-[#6A6657]">{consultation.doctorName}</span></p>
                                <p className="text-sm text-[#B0AA91]">
                                  {new Date(consultation.date).toLocaleDateString()} at {consultation.time}
                                </p>
                              </div>
                              <div className={`mt-2 sm:mt-0 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                                consultation.status === 'scheduled' ? 'bg-[#D4A84B]/10 text-[#7F652D]' :
                                consultation.status === 'completed' ? 'bg-[#2ECC71]/10 text-[#2ECC71]' :
                                'bg-[#E74C3C]/10 text-[#E74C3C]'
                              }`}>
                                {consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
                              </div>
                            </div>
                            
                            {consultation.notes && (
                              <div className="p-4 border-b border-[#E0DDD3]">
                                <h4 className="font-medium text-[#46443A] mb-1">Consultation Notes:</h4>
                                <p className="text-[#8D8874] text-sm">{consultation.notes}</p>
                              </div>
                            )}
                            
                            <div className="px-4 py-3 flex justify-between items-center">
                              {consultation.status === 'scheduled' && (
                                <button className="text-[#E74C3C] hover:text-error-600 text-sm font-medium">
                                  Cancel Appointment
                                </button>
                              )}
                              
                              {consultation.status === 'completed' ? (
                                <button className="text-[#3E5747] hover:text-[#2F4435] text-sm font-medium ml-auto">
                                  Book Follow-up
                                </button>
                              ) : (
                                <button className="text-[#3E5747] hover:text-[#2F4435] text-sm font-medium ml-auto inline-flex items-center">
                                  View Details
                                  <ChevronRight size={16} className="ml-1" />
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
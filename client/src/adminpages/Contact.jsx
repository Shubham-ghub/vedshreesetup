import React, { useState } from 'react';
import { Save, Mail, Phone, MapPin, Trash2 } from 'lucide-react';
import PageHeader from '../admincomponents/PageHeader';
import Card from '../admincomponents/Card';
import { motion } from 'framer-motion';

const initialInquiries = [
  { 
    id: 1, 
    name: 'Rahul Sharma', 
    email: 'rahul.s@example.com',
    subject: 'Product Inquiry',
    message: 'I would like to know more about your Ashwagandha products. Do you ship internationally?',
    date: '2025-05-15',
    status: 'Unread'
  },
  { 
    id: 2, 
    name: 'Priya Patel', 
    email: 'priya.p@example.com',
    subject: 'Consultation Request',
    message: 'I am interested in booking a consultation with an Ayurvedic expert for skin issues.',
    date: '2025-05-14',
    status: 'Read'
  },
  { 
    id: 3, 
    name: 'Amit Verma', 
    email: 'amit.v@example.com',
    subject: 'Bulk Order Query',
    message: 'We are a wellness center looking to place a bulk order of your products. Can you provide details?',
    date: '2025-05-12',
    status: 'Replied'
  },
];

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    email: 'contact@vedshree.com',
    phone: '+91 98765 43210',
    address: '123 Ayurveda Lane, Rishikesh, Uttarakhand, India - 249201',
  });
  
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  
  const getSelectedInquiry = () => {
    if (selectedInquiry === null) return null;
    return inquiries.find(inquiry => inquiry.id === selectedInquiry) || null;
  };
  
  const handleStatusChange = (id, status) => {
    setInquiries(inquiries.map(inquiry => 
      inquiry.id === id ? { ...inquiry, status } : inquiry
    ));
  };
  
  const handleDeleteInquiry = (id) => {
    setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
    if (selectedInquiry === id) {
      setSelectedInquiry(null);
    }
  };
  
  return (
    <div>
      <PageHeader 
        title="Contact Management" 
        description="Manage contact information and inquiries"
        actions={
          <button className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90 flex items-center gap-2">
            <Save size={16} />
            <span>Save Changes</span>
          </button>
        }
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-1">
          <h3 className="text-lg font-medium text-[#0E2A10] mb-4">
            Contact Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                Email Address
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-[#87a186]/30 rounded-l-md bg-[#0E2A10]/5 text-[#87a186]">
                  <Mail size={16} />
                </span>
                <input 
                  type="email" 
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white rounded-l-none"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-[#87a186]/30 rounded-l-md bg-[#0E2A10]/5 text-[#87a186]">
                  <Phone size={16} />
                </span>
                <input 
                  type="text" 
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white rounded-l-none"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                Address
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-[#87a186]/30 rounded-l-md bg-[#0E2A10]/5 text-[#87a186]">
                  <MapPin size={16} />
                </span>
                <textarea 
                  value={contactInfo.address}
                  onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                  className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white rounded-l-none min-h-[100px]"
                ></textarea>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-medium text-[#0E2A10] mb-4">
            Customer Inquiries
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px]">
            <div className="border border-[#87a186]/20 rounded-md overflow-hidden">
              <div className="p-3 border-b border-[#87a186]/20 bg-[#0E2A10]/5">
                <h4 className="text-[#0E2A10] font-medium">Inbox</h4>
              </div>
              <div className="overflow-y-auto h-[350px]">
                {inquiries.map((inquiry) => (
                  <div 
                    key={inquiry.id}
                    className={`border-b border-[#87a186]/10 p-3 cursor-pointer transition-colors ${
                      selectedInquiry === inquiry.id ? 'bg-[#0E2A10]/5' : 'hover:bg-[#0E2A10]/5'
                    }`}
                    onClick={() => setSelectedInquiry(inquiry.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium text-[#0E2A10]">{inquiry.name}</h5>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        inquiry.status === 'Unread' ? 'bg-blue-100 text-blue-700' : 
                        inquiry.status === 'Read' ? 'bg-gray-100 text-gray-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {inquiry.status}
                      </span>
                    </div>
                    <p className="text-sm text-[#87a186] mt-1">{inquiry.subject}</p>
                    <p className="text-xs text-[#87a186]/70 mt-1">{inquiry.date}</p>
                  </div>
                ))}
                {inquiries.length === 0 && (
                  <div className="flex items-center justify-center h-full text-[#87a186]/60">
                    No inquiries found
                  </div>
                )}
              </div>
            </div>
            
            <div className="border border-[#87a186]/20 rounded-md overflow-hidden">
              <div className="p-3 border-b border-[#87a186]/20 bg-[#0E2A10]/5 flex items-center justify-between">
                <h4 className="text-[#0E2A10] font-medium">Message Details</h4>
                {selectedInquiry && (
                  <button 
                    className="p-1 hover:bg-red-50 rounded-md"
                    onClick={() => handleDeleteInquiry(selectedInquiry)}
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                )}
              </div>
              <div className="p-4 h-[350px] overflow-y-auto">
                {selectedInquiry ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {getSelectedInquiry() && (
                      <>
                        <div className="mb-4">
                          <h5 className="text-lg font-medium text-[#0E2A10]">
                            {getSelectedInquiry()?.subject}
                          </h5>
                          <p className="text-sm text-[#87a186]/80 mt-1">
                            From: {getSelectedInquiry()?.name} ({getSelectedInquiry()?.email})
                          </p>
                          <p className="text-sm text-[#87a186]/60 mt-0.5">
                            Received: {getSelectedInquiry()?.date}
                          </p>
                        </div>
                        
                        <div className="mb-6 p-4 border border-[#87a186]/20 rounded-md bg-[#0E2A10]/5">
                          <p className="text-[#0E2A10]/90">
                            {getSelectedInquiry()?.message}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                              Status
                            </label>
                            <select 
                              className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white"
                              value={getSelectedInquiry()?.status}
                              onChange={(e) => handleStatusChange(selectedInquiry, e.target.value)}
                            >
                              <option value="Unread">Unread</option>
                              <option value="Read">Read</option>
                              <option value="Replied">Replied</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                              Reply
                            </label>
                            <textarea 
                              className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white min-h-[100px]"
                              placeholder="Type your reply here..."
                            ></textarea>
                          </div>
                          
                          <button className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90 w-full">
                            Send Reply
                          </button>
                        </div>
                      </>
                    )}
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-full text-[#87a186]/60">
                    Select a message to view details
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
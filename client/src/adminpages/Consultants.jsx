import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Calendar, Clock, User, Users, Mail, Phone, Calendar1, Leaf, Stethoscope, CheckCircle } from 'lucide-react';
import PageHeader from '../admincomponents/PageHeader';
import Card from '../admincomponents/Card';
import { motion } from 'framer-motion';

const initialConsultants = [
  {
    id: 1,
    name: 'Dr. Rajesh Sharma',
    specialization: 'Ayurvedic Physician',
    experience: '15 years',
    email: 'dr.sharma@vedshree.com',
    phone: '+91 98765 43210',
    availability: 'Mon, Wed, Fri (10:00 AM - 4:00 PM)',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Dr. Priya Patel',
    specialization: 'Panchakarma Specialist',
    experience: '12 years',
    email: 'dr.patel@vedshree.com',
    phone: '+91 98765 43211',
    availability: 'Tue, Thu, Sat (11:00 AM - 5:00 PM)',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Dr. Amit Verma',
    specialization: 'Herbal Medicine Expert',
    experience: '10 years',
    email: 'dr.verma@vedshree.com',
    phone: '+91 98765 43212',
    availability: 'Mon-Fri (9:00 AM - 2:00 PM)',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

const appointments = [
  { 
    id: 1, 
    consultant: 'Dr. Rajesh Sharma', 
    patient: 'Neha Kapoor', 
    Phone: '+91 22222 22222', 
    Email: 'asdfg@gami.com', 
    date: '2023-05-16', 
    time: '11:30 AM', 
    status: 'Confirmed' 
  },
  { 
    id: 2, 
    consultant: 'Dr. Priya Patel', 
    patient: 'Ramesh Singh', 
    Phone: '+91 22222 22222', 
    Email: 'asdfg@gami.com', 
    date: '2023-05-17', 
    time: '2:00 PM', 
    status: 'Pending' 
  },
  { 
    id: 3, 
    consultant: 'Dr. Amit Verma', 
    patient: 'Anjali Mehta', 
    Phone: '+91 22222 22222', 
    Email: 'asdfg@gami.com', 
    date: '2023-05-18', 
    time: '10:00 AM', 
    status: 'Confirmed' 
  },
  { 
    id: 4, 
    consultant: 'Dr. Rajesh Sharma', 
    patient: 'Vikram Joshi', 
    Phone: '+91 22222 22222', 
    Email: 'asdfg@gami.com', 
    date: '2023-05-19', 
    time: '12:30 PM', 
    status: 'Cancelled' 
  },
];

const consultationTypes = [
  {
    id: "general",
    title: "General Wellness",
    description: "A comprehensive assessment of your constitution and health concerns with personalized recommendations.",
    duration: "45 minutes",
    price: 1500,
    icon: <Leaf className="w-6 h-6" />
  },
  {
    id: "specific",
    title: "Specific Concern",
    description: "Focused consultation targeting a specific health concern with targeted Ayurvedic solutions.",
    duration: "30 minutes",
    price: 1200,
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    id: "followup",
    title: "Follow-Up Session",
    description: "Review your progress and make adjustments to your personalized wellness plan.",
    duration: "20 minutes",
    price: 800,
    icon: <CheckCircle className="w-6 h-6" />
  }
];

const Consultants = () => {
  const [consultants, setConsultants] = useState(initialConsultants);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('consultants');

  const filteredConsultants = consultants.filter(
    consultant => consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) || consultant.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <PageHeader
        title="Consultants"
        description="Manage your Ayurvedic consultants and appointments"
        actions={
          <button
            className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90 flex items-center gap-2"
            onClick={() => setShowForm(true)}>
            <Plus size={16} />
           <span>Add</span>
          </button>
          
        }
      />

      <div className="mb-6 flex border-b border-[#87a186]/20">
        <button
          className={`py-3 px-5 font-medium ${activeTab === 'consultants'
            ? 'text-[#0E2A10] border-b-2 border-[#0E2A10]'
            : 'text-[#87a186] hover:text-[#0E2A10]/80'
            }`}
          onClick={() => setActiveTab('consultants')}>
          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>Consultants</span>
          </div>
        </button>
        <button
          className={`py-3 px-5 font-medium ${activeTab === 'appointments'
            ? 'text-[#0E2A10] border-b-2 border-[#0E2A10]'
            : 'text-[#87a186] hover:text-[#0E2A10]/80'
            }`}
          onClick={() => setActiveTab('appointments')}
        >
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>Appointments</span>
          </div>
        </button>
        <button
          className={`py-3 px-5 font-medium ${activeTab === 'consultationTypes'
            ? 'text-[#0E2A10] border-b-2 border-[#0E2A10]'
            : 'text-[#87a186] hover:text-[#0E2A10]/80'
            }`}
          onClick={() => setActiveTab('consultationTypes')}
        >
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>ConsultationTypes</span>
          </div>
        </button>
      </div>

      {activeTab === 'consultants' && (
        <>
          {showForm && (
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <h3 className="text-lg font-medium text-[#0E2A10] mb-4">
                  Add New Consultant
                </h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Full Name
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Specialization
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Experience
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Email
                      </label>
                      <input type="email" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Phone
                      </label>
                      <input type="tel" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Availability
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Profile Image URL
                      </label>
                      <input type="url" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" />
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
                    <button type="submit" className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90">
                      Add Consultant
                    </button>
                  </div>
                </form>
              </Card>
            </motion.div>
          )}

          <Card>
            <div className="flex items-center justify-between mb-6">
              <div className="relative w-64">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87a186]/60" />
                <input
                  type="text"
                  placeholder="Search consultants..."
                  className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <span className="text-sm text-[#87a186]/70">
                  Total: {filteredConsultants.length} consultants
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConsultants.map((consultant) => (
                <motion.div
                  key={consultant.id}
                  className="border border-[#87a186]/20 rounded-md overflow-hidden bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-48 bg-[#0E2A10]/5 relative">
                    {consultant.image ? (
                      <img
                        src={consultant.image}
                        alt={consultant.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User size={48} className="text-[#87a186]/30" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex gap-1">
                      <button className="p-1.5 bg-white rounded-md shadow-sm hover:bg-[#0E2A10]/10">
                        <Edit size={14} className="text-[#87a186]" />
                      </button>
                      <button className="p-1.5 bg-white rounded-md shadow-sm hover:bg-red-50">
                        <Trash2 size={14} className="text-red-500" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-medium text-[#0E2A10]">{consultant.name}</h3>
                    <p className="text-[#87a186] font-medium">{consultant.specialization}</p>
                    <p className="text-sm text-[#87a186]/80 mt-1">Experience: {consultant.experience}</p>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar1 size={14} className="text-[#87a186]/70" />
                        <span className="text-[#87a186]/90">{consultant.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail size={14} className="text-[#87a186]/70" />
                        <span className="text-[#87a186]/90">{consultant.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={14} className="text-[#87a186]/70" />
                        <span className="text-[#87a186]/90">{consultant.phone}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredConsultants.length === 0 && (
                <div className="col-span-3 py-8 text-center text-[#87a186]/60">
                  No consultants found matching your search.
                </div>
              )}
            </div>
          </Card>
        </>
      )}

      {activeTab === 'appointments' && (
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-[#0E2A10]">Upcoming Appointments</h3>
            <button className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90 flex items-center gap-2">
              <Plus size={16} />
              <span>Schedule Appointment</span>
            </button>
          </div>

          <div className="w-full overflow-x-auto rounded-md border border-[#87a186]/10">
            <table className="w-full min-w-full text-left">
              <thead>
                <tr>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Id</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Consultant</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Patient</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Phone</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Email</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Date & Time</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Status</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="text-[#87a186] border-t border-[#87a186]/10 px-6 py-4">{appointment.id}</td>
                    <td className=" text-[#0E2A10] border-t border-[#87a186]/10 px-6 py-4">{appointment.consultant}</td>
                    <td>{appointment.patient}</td>
                    <td className="text-[#87a186] border-t border-[#87a186]/10 px-6 py-4">{appointment.Phone}</td>
                    <td className="text-[#87a186] border-t border-[#87a186]/10 px-6 py-4">{appointment.Email}</td>
                    <td className="flex items-center gap-2 border-t border-[#87a186]/10 px-6 py-4">
                      <Calendar size={14} className="text-[#87a186]/70" />
                      <span>{appointment.date}</span>
                      <Clock size={14} className="text-[#87a186]/70 ml-1" />
                      <span>{appointment.time}</span>
                    </td>
                    <td className='border-t border-[#87a186]/10 px-6 py-4'>
                      <span className={`px-2 py-1 rounded-full text-xs ${appointment.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                        appointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className='border-t border-[#87a186]/10 px-6 py-4'>
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-[#0E2A10]/10 rounded-md">
                          <Edit size={16} className="text-[#87a186]" />
                        </button>
                        <button className="p-1 hover:bg-red-50 rounded-md">
                          <Trash2 size={16} className="text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {activeTab === 'consultationTypes' && (
        <>
          {showForm && (
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <h3 className="text-lg font-medium text-[#0E2A10] mb-4">
                  Add Consultation Types
                </h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Title
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Description
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                       Duration
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0E2A10] mb-1">
                        Price
                      </label>
                      <input type="email" className="w-full px-4 py-2 border border-[#87a186]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30 bg-white" required />
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
                    <button type="submit" className="px-4 py-2 rounded-md transition-all duration-300 font-medium text-sm bg-[#0E2A10] text-white hover:bg-[#0E2A10]/90">
                      Add Consultation Types
                    </button>
                  </div>
                </form>
              </Card>
            </motion.div>
          )}
          <Card>
            <h3 className="text-lg font-medium text-[#0E2A10] mb-4">Consultation Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultationTypes.map((type) => (
                <div key={type.id} className="border border-[#87a186]/20 rounded-md p-4 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    {type.icon}
                    <h4 className="text-lg font-medium text-[#0E2A10]">{type.title}</h4>
                  </div>
                  <p className="text-sm text-[#87a186]/80 mb-2">{type.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#87a186]/70">{type.duration}</span>
                    <span className="text-lg font-semibold text-[#0E2A10]">₹{type.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default Consultants;
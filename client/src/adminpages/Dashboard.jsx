import React, { use } from 'react';
import { 
  ShoppingBag, Users, Tag, ArrowUp, 
  ArrowDown, Leaf, BarChart3, LineChart
} from 'lucide-react';
import PageHeader from '../admincomponents/PageHeader';
import Card from '../admincomponents/Card';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';



const recentProducts = [
  { id: 1, name: 'Ashwagandha Powder', category: 'Herbs', status: 'In Stock' },
  { id: 2, name: 'Triphala Churna', category: 'Supplements', status: 'In Stock' },
  { id: 3, name: 'Brahmi Oil', category: 'Oils', status: 'Low Stock' },
  { id: 4, name: 'Neem Capsules', category: 'Supplements', status: 'Out of Stock' },
  { id: 5, name: 'Chyawanprash', category: 'Supplements', status: 'In Stock' },
];

const recentConsultations = [
  { id: 1, patient: 'Amit Sharma', consultant: 'Dr. Gupta', date: '2023-05-15', time: '10:00 AM' },
  { id: 2, patient: 'Priya Singh', consultant: 'Dr. Patel', date: '2023-05-16', time: '11:30 AM' },
  { id: 3, patient: 'Rahul Verma', consultant: 'Dr. Sharma', date: '2023-05-17', time: '2:00 PM' },
  { id: 4, patient: 'Neha Kapoor', consultant: 'Dr. Gupta', date: '2023-05-18', time: '4:30 PM' },
];

const Dashboard = () => {

  // const {getAllCategories, isloading, message, Error} = useSelector((state) => state.category);

  // const {user} = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  const statsCards = [
  { 
    title: 'Total Products', 
    value: '120', 
    icon: <ShoppingBag size={18} />, 
    change: '+12%', 
    increased: true,
    color: 'bg-green-100 text-green-700'
  },
  { 
    title: 'Categories', 
    value:  '125', 
    icon: <Tag size={18} />, 
    change: '+4%', 
    increased: true,
    color: 'bg-blue-100 text-blue-700'
  },
  { 
    title: 'Consultants', 
    value: '123', 
    icon: <Users size={18} />, 
    change: '+2%', 
    increased: true,
    color: 'bg-purple-100 text-purple-700'
  },
  { 
    title: 'Consultations', 
    value: '245', 
    icon: <Leaf size={18} />, 
    change: '-5%', 
    increased: false,
    color: 'bg-amber-100 text-amber-700'
  },
];

// useEffect(() => {
//   dispatch(getAllCategories());
//   dispatch(user());

// },[])

  return (
    <div>
      <PageHeader 
        title="Dashboard" 
        description="Welcome to Vedshree Ayurvedic Dashboard"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {statsCards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 border border-[#87a186]/10 flex items-start justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div>
              <p className="text-sm text-[#87a186]/80">{card.title}</p>
              <h3 className="text-2xl font-medium text-[#0E2A10] mt-1">{card.value}</h3>
              <div className="flex items-center mt-1">
                <span className={`text-xs px-1.5 py-0.5 rounded-full flex items-center ${card.increased ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {card.increased ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                  <span className="ml-0.5">{card.change}</span>
                </span>
                <span className="text-xs text-[#87a186]/60 ml-2">vs last month</span>
              </div>
            </div>
            <div className={`p-2 rounded-full ${card.color} bg-opacity-10`}>
              {card.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="min-h-[320px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-[#0E2A10]">Products Overview</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded-full bg-[#0E2A10]"></span>
              <span className="text-[#87a186]/90">This Month</span>
              <span className="w-3 h-3 rounded-full bg-[#87a186] ml-2"></span>
              <span className="text-[#87a186]/90">Last Month</span>
            </div>
          </div>
          <div className="flex items-center justify-center h-[240px]">
            <BarChart3 size={240} className="text-[#87a186]/20" strokeWidth={1} />
          </div>
        </Card> */}
        
        {/* <Card className="min-h-[320px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-[#0E2A10]">Consultation Trends</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#87a186]/90">Last 30 days</span>
            </div>
          </div>
          <div className="flex items-center justify-center h-[240px]">
            <LineChart size={240} className="text-[#87a186]/20" strokeWidth={1} />
          </div>
        </Card> */}
      {/* </div> */}

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Products">
          <div className="w-full overflow-x-auto rounded-md border border-[#87a186]/10">
            <table className="w-full min-w-full text-left">
              <thead>
                <tr>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Name</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Category</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentProducts.map((product) => (
                  <tr key={product.id}>
                    <td className='border-t border-[#87a186]/10 px-6 py-4'>{product.name}</td>
                    <td className='border-t border-[#87a186]/10 px-6 py-4'>{product.category}</td>
                    <td className='border-t border-[#87a186]/10 px-6 py-4'>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.status === 'In Stock' ? 'bg-green-100 text-green-700' : 
                        product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        
        <Card title="Recent Consultations">
          <div className="w-full overflow-x-auto rounded-md border border-[#87a186]/10">
            <table className="w-full min-w-full text-left">
              <thead>
                <tr>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Patient</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Consultant</th>
                  <th className='bg-[#0E2A10]/80 text-white font-medium px-6 py-3'>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {recentConsultations.map((consultation) => (
                  <tr key={consultation.id}>
                    <td className='border-t border-[#87a186]/10 px-6 py-4'>{consultation.patient}</td>
                    <td className='border-t border-[#87a186]/10 px-6 py-4'>{consultation.consultant}</td>
                    <td className='border-t border-[#87a186]/10 px-6 py-4'>{consultation.date} at {consultation.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  X, LayoutDashboard, Tags, ShoppingBag, FileText, 
  Shield, FileTerminal, Phone, Users, Leaf,
  User,
  LogOut
} from 'lucide-react';
import Logo from './Logo';
import { motion } from 'framer-motion';

function Sidebar({ isOpen, closeSidebar }) {
  const navItems = [
    { name: 'Dashboard', path: 'dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'About', path: 'about', icon: <FileText size={20} /> },
    {name: 'Hero Section', path: 'hero', icon: <FileText size={20} /> },
    { name: 'Categories', path: 'categories', icon: <Tags size={20} /> },
    { name: 'Products', path: 'products', icon: <ShoppingBag size={20} /> },
    { name: 'Consultants', path: 'consultants', icon: <Users size={20} /> },
    { name: 'Orders', path: 'orders', icon: <ShoppingBag size={20} /> },
    { name: 'Testimonials', path: 'testimonials', icon: <FileText size={20} /> },
    { name: 'Contact', path: 'contact', icon: <Phone size={20} /> },
    { name: 'Privacy Policy', path: 'privacy', icon: <Shield size={20} /> },
    { name: 'Terms & Conditions', path: 'terms', icon: <FileTerminal size={20} /> },
    { name: 'Admin Profile', path: 'adminprofile', icon: <User size={20} /> },
    { name: 'Logout', path: '/logout', icon: <LogOut size={20} /> },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <motion.div 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gradient-to-br from-[#ECEFE9] to-[#D9DFD3] shadow-lg transform lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
        <div className="flex items-center justify-between p-4 border-b border-[#87a186]/10">
          <Logo />
          <button
            onClick={closeSidebar}
            className="p-2 rounded-md hover:bg-[#0E2A10]/10 ">
            <X size={20} className="text-[#0E2A10]" />
          </button>
        </div>
        <div className="p-4">
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-2 rounded-md text-[#0E2A10] hover:bg-[#0E2A10]/10 transition-all duration-200 ${isActive ? 'active' : ''}`
                    }
                    onClick={closeSidebar}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-gradient-to-br from-[#ECEFE9] to-[#D9DFD3] border-r border-[#87a186]/10 shadow-sm">
        <div className="p-4 border-b border-[#87a186]/10 ">
          <Logo />
        </div>
        <div className="flex-1 overflow-y-auto p-4 ">
          <nav>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-4 py-[.4rem] rounded-md text-[#0E2A10] hover:bg-[#0E2A10]/10 transition-all duration-200 ${isActive ? 'active bg-[#0E2A10] text-white' : ''}`
                    }
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="p-4 border-t border-[#87a186]/10">
          <div className="rounded-md bg-[#0E2A10]/5 p-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0E2A10] flex items-center justify-center">
                <Leaf size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#0E2A10]">Vedshree Ayurvedic</p>
                <p className="text-xs text-[#87a186]/80">Admin Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
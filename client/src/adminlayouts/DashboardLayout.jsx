import React, { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut, Bell, Search, Moon, Sun } from 'lucide-react';
import Logo from '../admincomponents/Logo';
import Sidebar from '../admincomponents/Sidebar';

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    return path.charAt(1).toUpperCase() + path.slice(2);
  };
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  return (
    <div className="flex h-screen bg-[#F9F7F3]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden border border-
      ">
        {/* Header */}
        <header className="bg-gradient-to-br from-[#ECEFE9] to-[#D9DFD3] border-b border-[#87a186]/10 shadow-sm ">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleSidebar}
                className="rounded-md p-2 lg:hidden text-[#87a186] hover:bg-[#0E2A10]/10"
              >
                <Menu size={22} />
              </button>
              <h1 className="text-xl font-serif font-medium text-[#0E2A10]">
                {getPageTitle()}
              </h1>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-64 pl-10 pr-4 py-2 rounded-md border border-[#87a186]/30 focus:outline-none focus:ring-2 focus:ring-[#0E2A10]/30"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87a186]/60" />
              </div>
              
              <button className="p-2 rounded-full hover:bg-[#0E2A10]/10 relative">
                <Bell size={20} className="text-[#87a186]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-[#0E2A10]/10"
              >
                {darkMode ? (
                  <Sun size={20} className="text-[#87a186]" />
                ) : (
                  <Moon size={20} className="text-[#87a186]" />
                )}
              </button>
              
              <div className="relative group">
                <button className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0E2A10] flex items-center justify-center text-white font-medium">
                    VA
                  </div>
                  <ChevronDown size={16} className="text-[#87a186]" />
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-[#87a186]/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-3 border-b border-[#87a186]/10">
                    <p className="font-medium text-[#0E2A10]">Admin User</p>
                    <p className="text-sm text-[#87a186]/80">admin@vedshree.com</p>
                  </div>
                  <div className="p-1">
                    <Link to="/profile" className="flex items-center gap-2 px-3 py-2 hover:bg-[#0E2A10]/5 rounded-md">
                      Profile Settings
                    </Link>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-red-50 rounded-md">
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 bg-gradient-to-br from-[#ECEFE9]/15 to-[#D9DFD3]/15 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
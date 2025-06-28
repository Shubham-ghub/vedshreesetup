import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Button from '../components/ui/Button';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    // Add login logic here
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 bg-[#F7F6F4]">
      <div className="container mx-auto max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="font-montserrat font-bold text-3xl text-[#1F2D24] mb-6 text-center">Welcome Back</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#6A6657] mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                  required
                />
                <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C0BBA7]" />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#6A6657] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                  required
                />
                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C0BBA7]" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-[#4D6A59] border-[#D0CCBD] rounded focus:ring-[#4D6A59]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-[#6A6657]">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-[#3E5747] hover:text-[#3E5747]">
                Forgot password?
              </Link>
            </div>
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
            >
              Sign In
            </Button>
          </form>
          
          <p className="mt-4 text-center text-sm text-[#8D8874]">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#3E5747] hover:text-[#3E5747] font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
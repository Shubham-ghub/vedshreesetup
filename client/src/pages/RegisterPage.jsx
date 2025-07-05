import React, { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const RegisterPage = () => {

  const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: ''
  });

  const { name, email, phone, address, password, confirmPassword } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
     toast.error('Passwords do not match');
    }else {
      dispatch(registerUser(formData))
    }
  };

  useEffect(() => {
    if (isSuccess || user) {
      navigate('/login');
    }
    if (isError) {
      toast.error(message);
    }
  }, [user, isError, message]);

  // if (isLoading) {
  //       return <Loader />
  //   }

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 bg-[#F7F6F4]">
      <div className="container mx-auto max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="font-montserrat font-bold text-3xl text-[#1F2D24] mb-6 text-center">Create Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#6A6657] mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                  required
                />
                <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C0BBA7]" />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#6A6657] mb-1">
                Email 
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                  required
                />
                <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C0BBA7]" />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-[#6A6657] mb-1">
                Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                  required
                />
                <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C0BBA7]" />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#6A6657] mb-1">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                  required
                />
                <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C0BBA7]" />
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
                  value={password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                  required
                />
                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C0BBA7]" />
              </div>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#6A6657] mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-[#D0CCBD] rounded-md focus:ring-1 focus:ring-[#4D6A59] focus:border-[#4D6A59]"
                  required
                />
                <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#C0BBA7]" />
              </div>
            </div>
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
            >
              Create Account
            </Button>
          </form>
          
          <p className="mt-4 text-center text-sm text-[#8D8874]">
            Already have an account?{' '}
            <Link to="/login" className="text-[#3E5747] hover:text-[#2F4435] font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
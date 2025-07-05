import React, {  useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Leaf, Menu, X, ShoppingCart, User } from 'lucide-react';
import Logo from '../../assets/leaf.png'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';



const Header = ({ isScrolled }) => {

  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt='' className={`mr-2 animate-leaf-sway w-10 h-10 ${isScrolled ? 'text-[#4D6A59]' : 'text-[#4D6A59]'}`} size={32} />
          <div className="flex flex-col">
            <span className={`font-montserrat font-bold text-xl ${isScrolled ? 'text-[#3E5747]' : 'text-[#3E5747]'}`}>
              Vedshree
            </span>
            <span className={`font-montserrat text-xs ${isScrolled ? 'text-[#687F57]' : 'text-[#687F57]'}`}>
              Ayurvedic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors ${isActive
                ? 'text-[#B85C38]'
                : isScrolled
                  ? 'text-[#6A6657] hover:text-[#B85C38]'
                  : 'text-[#6A6657] hover:text-[#B85C38]'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition-colors ${isActive
                ? 'text-[#B85C38]'
                : isScrolled
                  ? 'text-[#6A6657] hover:text-[#B85C38]'
                  : 'text-[#6A6657] hover:text-[#B85C38]'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/consultancy"
            className={({ isActive }) =>
              `font-medium transition-colors ${isActive
                ? 'text-[#B85C38]'
                : isScrolled
                  ? 'text-[#6A6657] hover:text-[#B85C38]'
                  : 'text-[#6A6657] hover:text-[#B85C38]'
              }`
            }
          >
            Consultancy
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `font-medium transition-colors ${isActive
                ? 'text-[#B85C38]'
                : isScrolled
                  ? 'text-[#6A6657] hover:text-[#B85C38]'
                  : 'text-[#6A6657] hover:text-[#B85C38]'
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition-colors ${isActive
                ? 'text-[#B85C38]'
                : isScrolled
                  ? 'text-[#6A6657] hover:text-[#B85C38]'
                  : 'text-[#6A6657] hover:text-[#B85C38]'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/profile" className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-[#D9DFD3]' : 'hover:bg-white/20'}`}>
            <User size={20} className={isScrolled ? 'text-[#3E5747]' : 'text-[#3E5747]'} />
          </Link>
          <Link to="#" className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-[#D9DFD3]' : 'hover:bg-white/20'}`}>
            <ShoppingCart size={20} className={isScrolled ? 'text-[#3E5747]' : 'text-[#3E5747]'} />
          </Link>
          {user ? (<>{user.isAdmin ? (
              <Link to="/dashboardlayout" className="bg-[#B85C38] hover:bg-[#96492D] text-white font-medium py-2 px-4 rounded-md transition-colors shadow-md">
                Admin
              </Link>) : (<></>)}
            <button  
            onClick={handleLogout}
            className="bg-[#B85C38] hover:bg-[#96492D] text-white font-medium py-2 px-4 rounded-md transition-colors shadow-md">
              Logout
            </button></>) : 
            (<Link to="/login">
              <button className="bg-[#B85C38] hover:bg-[#96492D] text-white font-medium py-2 px-4 rounded-md transition-colors shadow-md">
                Login
              </button>
            </Link>
            )
          }
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-[#3E5747]' : 'text-[#3E5747]'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-[#3E5747]' : 'text-[#3E5747]'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-16">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium py-3 border-b border-[#EFEEE9] ${isActive ? 'text-[#B85C38]' : 'text-[#6A6657]'}`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium py-3 border-b border-[#EFEEE9] ${isActive ? 'text-[#B85C38]' : 'text-[#6A6657]'}`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/consultancy"
              className={({ isActive }) =>
                `font-medium py-3 border-b border-[#EFEEE9] ${isActive ? 'text-[#B85C38]' : 'text-[#6A6657]'}`
              }
              onClick={toggleMenu}
            >
              Consultancy
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-medium py-3 border-b border-[#EFEEE9] ${isActive ? 'text-[#B85C38]' : 'text-[#6A6657]'}`
              }
              onClick={toggleMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium py-3 border-b border-[#EFEEE9] ${isActive ? 'text-[#B85C38]' : 'text-[#6A6657]'}`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `font-medium py-3 border-b border-[#EFEEE9] ${isActive ? 'text-[#B85C38]' : 'text-[#6A6657]'}`
              }
              onClick={toggleMenu}
            >
              My Profile
            </NavLink>
            <Link
              to="/LoginPage"
              className="bg-[#B85C38] hover:bg-[#96492D] text-white font-medium py-3 px-4 rounded-md transition-colors text-center mt-2"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
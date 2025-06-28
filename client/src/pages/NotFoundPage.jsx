import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center bg-[#F7F6F4]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="font-montserrat font-bold text-8xl text-[#8EA081] mb-4">404</h1>
          <h2 className="font-montserrat font-semibold text-2xl text-[#1F2D24] mb-4">Page Not Found</h2>
          <p className="text-[#8D8874] mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              onClick={() => window.location.href = '/'}
            >
              <Home size={18} className="mr-2" />
              Back to Home
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
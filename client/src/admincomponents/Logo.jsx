import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-[#0E2A10] flex items-center justify-center">
        <Leaf size={18} className="text-white" />
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-lg font-medium leading-none text-[#0E2A10]">Vedshree</span>
        <span className="text-xs text-[#87a186]/80 leading-none">Ayurvedic</span>
      </div>
    </Link>
  );
}

export default Logo;
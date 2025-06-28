import React from 'react';
import { motion } from 'framer-motion';

function Card({ title, children, className = '' }) {
  return (
    <motion.div 
      className={`bg-white/90 rounded-lg shadow-sm p-6 border border-[#87a186]/10 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {title && (
        <h3 className="text-lg font-medium text-[#0E2A10] mb-4 pb-3 border-b border-[#87a186]/10 ">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
}

export default Card;
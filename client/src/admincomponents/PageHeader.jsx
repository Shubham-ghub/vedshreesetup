import React from 'react';
import { motion } from 'framer-motion';

function PageHeader({ title, description, actions }) {
  return (
    <motion.div 
      className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className=''>
        <h1 className="text-2xl md:text-3xl font-serif font-medium text-[#0E2A10] bg-red ">{title}</h1>
        <p className="mt-1 text-[#87a186]/90">{description}</p>
      </div>
      {actions && (
        <div className="flex gap-3">
          {actions}
        </div>
      )}
    </motion.div>
  );
}

export default PageHeader;
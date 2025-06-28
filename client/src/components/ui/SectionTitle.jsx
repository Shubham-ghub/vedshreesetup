import React from 'react';



const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#1F2D24] relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#B85C38] mt-2"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#8D8874] max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
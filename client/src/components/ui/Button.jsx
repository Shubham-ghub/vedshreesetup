import React from 'react';

// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: 'primary' | 'secondary' | 'accent' | 'outline';
//   size?: 'sm' | 'md' | 'lg';
//   fullWidth?: boolean;
//   onClick?: () => void;
//   type?: 'button' | 'submit' | 'reset';
//   disabled?: boolean;
//   className?: string;
// }

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'font-medium rounded-md transition-all duration-200 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-[#4D6A59] hover:bg-[#3E5747] text-white shadow-md',
    secondary: 'bg-[#B85C38] hover:bg-[#96492D] text-white shadow-md',
    accent: 'bg-[#D4A84B] hover:bg-[#A9863C] text-[#1F2D24] shadow-md',
    outline: 'border border-[#4D6A59] text-[#3E5747] hover:bg-[#ECEFE9]',
  };
  
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
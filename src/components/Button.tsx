import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = "px-6 py-3 rounded-xl font-bold uppercase text-sm transition-all duration-150 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md hover:shadow-lg";
  
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 border border-blue-400",
    secondary: "bg-gray-700 text-gray-200 hover:bg-gray-600 border border-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600 border border-red-400",
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

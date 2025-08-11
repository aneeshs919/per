"use client";

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href = '#',
  className = '',
  variant = 'primary',
  ...props 
}) => {
  const baseClasses = 'relative inline-block px-4 py-2 font-medium group';
  
  return (
    <Link 
      href={href}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#333] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#8c49e7]"></span>
      <span className="relative text-black group-hover:text-white">
        {children}
      </span>
    </Link>
  );
};

export default Button;
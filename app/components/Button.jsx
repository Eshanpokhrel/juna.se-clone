import React from 'react';

const IconButton = ({ icon: Icon, email, link, size = 'w-12 h-12', className = '' }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex justify-center items-center rounded-full bg-transparent border-2 border-white hover:bg-[#4947ca] ${size} ${className}`}
    >
      {email ? (
        <span className="text-white text-2xl px-4">{email}</span>
      ) : (
        <Icon className="text-white text-2xl" /> 
      )}
    </a>
  );
};

export default IconButton;

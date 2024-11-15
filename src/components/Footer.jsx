import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center w-full fixed bottom-0 left-0">
      <div className="container mx-auto px-4">
        <p className="text-xs text-white">&copy; 2024 Scriptify Pro. All rights reserved.</p>
        <p className="text-xs mt-1 text-white">Designed and developed by Amit Mishra</p>
        <div className="mt-4">
          <p className="text-xs text-white">
            Contact : 
            <a
              className="ml-1 text-white hover:text-indigo-400 duration-200"
              href="tel:7978418038"
            >
              7978418038
            </a>
            <span className="mx-2">|</span>
            Email : 
            <a
              className="ml-1 text-white hover:text-indigo-400 duration-200"
              href="mailto:eivorftw234@gmail.com"
            >
              eivorftw234@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

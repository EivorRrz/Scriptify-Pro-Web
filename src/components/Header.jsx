import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
    return (
        <header className='w-full fixed top-0 left-0 flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'>
            <a href="/" className='text-2xl font-bold'>
                <span className='text-blue-300'></span>
            </a>
            <div className='flex items-center gap-4'>
                <a
                    href="https://github.com/EivorRrz"
                    target='_blank'
                    rel="noopener noreferrer"
                    className='text-gray-200 hover:text-gray-100 transition-colors duration-200'
                >
                    <FaGithub size={25} />
                </a>
                <a
                    href="https://www.linkedin.com/in/amit-mishra-656676303/"
                    target='_blank'
                    rel="noopener noreferrer"
                    className='text-gray-200 hover:text-gray-100 transition-colors duration-200'
                >
                    <FaLinkedin size={25} />
                </a>
                <a
                    href="/"
                    className='inline-flex items-center gap-2 px-3 py-2 rounded-lg text-blue-500 bg-white hover:bg-blue-50 shadow-md hover:shadow-lg transition-all duration-200'
                >
                    <p className='font-semibold'>Craft</p>
                    <i className="fa-solid fa-plus text-blue-500"></i>
                </a>
            </div>
        </header>
    );
}

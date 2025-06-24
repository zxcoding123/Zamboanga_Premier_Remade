import React from 'react';
import Image from '../Images/clinic.png';

function Navbar() {
    return (
        <nav className="bg-white  p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <div className="text-xl font-bold text-blue-950 flex items-center space-x-3">
  <img
    src={Image}
    alt="Premier Medical Center Zamboanga"
    className="w-10 h-10 object-contain"
  />
  <span>Premier Medical Center Zamboanga</span>
</div>


                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Testimonials</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">More Options</a>
                </div>

                <div className="hidden md:flex space-x-6">
                    <button className="text-gray-600 hover:text-blue-600">Login</button>
                    <button className="text-white pt-2 pb-2 pl-5 pr-5 rounded-full bg-blue-400 hover:text-white">Sign Up</button>

                </div>


                <div className="md:hidden">
                    <button title='button' id="menu-toggle" className="text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>


            <div id="mobile-menu" className="md:hidden hidden mt-2 space-y-2 px-4">
                <a href="#" className="block text-gray-600 hover:text-blue-600">Home</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">About</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Services</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
            </div>

        </nav>

    )
}

export default Navbar
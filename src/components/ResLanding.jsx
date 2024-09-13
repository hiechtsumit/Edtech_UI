import React, { useState } from 'react';
import { UserPlus, Menu, X } from 'lucide-react';

const ELandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-[80vh] bg-pink-white font-sans flex flex-col justify-between">
      <nav className="flex flex-wrap justify-around items-center p-4">
        <div className="text-xl font-bold text-black-blue">EDTECHUB</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto  md:mt-0 space-y-2 md:space-y-0 md:space-x-6`}>
          <a href="#" className="block md:inline ">Home</a>
          <a href="#" className="block md:inline ">Product</a>
          <a href="#" className="block md:inline ">Pricing</a>
          <a href="#" className="block md:inline ">Contact</a>
        </div>

        {/* Action buttons */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex space-x-2 md:mt-0`}>
          <button className="px-4 py-2 text-green-white font-semibold">Login</button>
          <button className="px-4 py-2 bg-green-white text-sm font-semibold text-white rounded-md flex items-center">
            <UserPlus className="mr-2" size={16} />
            JOIN US
          </button>
        </div>
      </nav>

      <main className="flex flex-col md:flex-row items-center justify-around gap-10 mt-10 md:mt-20 h-[100%] w-[100%]">
        <div className="max-w-lg md:text-left">
          <p className="text-green-white font-semibold mb-6 md:mb-10">Welcome</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-black">Best Learning</span>
            <br />
            <span className="text-black">Opportunities</span>
          </h1>
          <p className="mb-6">Our goal is to make online <br className="hidden md:inline" /> education work for everyone</p>
          <div className="space-x-4">
            <button className="px-6 py-2 bg-green-white text-white rounded-md">Join Us</button>
            <button className="px-6 py-2 border border-green-500 text-green-white rounded-md">Learn More</button>
          </div>
        </div>
        <div className="BOX-SGADOW md:mt-0">
          {/* <div className="absolute inset-0 transform translate-x-4 translate-y-4"></div> */}
          <img src="https://static.vecteezy.com/system/resources/thumbnails/026/991/883/small_2x/happy-school-girl-isolated-png.png" alt="Student" className="Box-Shadow z-10 w-auto h-[60vh] object-cover drop-shadow-2xl" />
        </div>
      </main>
    </div>
  );
};

export default ELandingPage;
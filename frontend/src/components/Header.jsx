import React, { useState } from 'react';
import logo from '/logo.png'; // Make sure your logo path is correct!
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Beverages'];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // TODO: Add your search logic here
  };

  return (
    <header className="bg-[#2D1B16] shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Cafe Logo" className="h-16 w-auto object-contain" />
          <h1 className="text-white text-2xl font-semibold hidden md:block">Coffee House</h1>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={handleSearch}
            className="flex-1 md:w-72 px-4 py-2 rounded-lg border border-[#6B3F3C] bg-[#5A3633] text-white placeholder-[#B8A6A5] focus:outline-none focus:ring-2 focus:ring-[#8B5F5C]"
          />
          <button className="bg-[#6B3F3C] hover:bg-[#8B5F5C] text-white p-2 rounded-lg transition">
            <FiSearch size={20} />
          </button>
        </div>
      </div>
      <nav className="flex gap-3 items-center justify-center overflow-x-auto py-3 scrollbar-hide bg-[#2D1B16]">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-[#5A3633] hover:bg-[#6B3F3C] text-white px-5 py-2 rounded-full whitespace-nowrap text-sm md:text-base transition"
          >
            {category}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;

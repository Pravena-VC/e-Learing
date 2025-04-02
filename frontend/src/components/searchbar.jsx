import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className={`relative flex items-center transition-all ${
        isFocused ? 'ring-2 ring-blue-500' : ''
      }`}>
        <AiOutlineSearch className="absolute left-3 text-gray-400 text-xl" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search anything..."
          className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-gray-400 hover:text-gray-600"
          >
            <AiOutlineClose />
          </button>
        )}
      </div>
      
      {isFocused && searchTerm && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border p-2 z-50">
          <div className="p-2 text-sm text-gray-500">
            No results found for "{searchTerm}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar
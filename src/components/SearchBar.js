import React from 'react';
const SearchBar = () => (
  <div className="bg-gray-200 py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl font-bold mb-4">Что ищем?</h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Поиск..."
          className="w-full md:w-1/2 px-4 py-2 rounded-md border border-gray-300"
        />
      </div>
    </div>
  </div>
);
export default SearchBar;
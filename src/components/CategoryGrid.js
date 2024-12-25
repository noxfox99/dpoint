import React from 'react';
const categories = [
  'Маркетплейсы',
  'Магазины ПАВ',
  'Обменники',
  'Работа',
  'Кадровые агентства',
  'Микросервисы',
  'Академия обучения',
  'Карьера',
  'Хакеры',
];
const CategoryGrid = () => (
  <div className="container mx-auto py-8 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white p-4 shadow-md rounded-md text-center hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">{category}</h2>
          <p className="text-gray-600">Short description about {category.toLowerCase()}.</p>
        </div>
      ))}
    </div>
  </div>
);
export default CategoryGrid;
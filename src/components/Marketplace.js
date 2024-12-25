import React from 'react';
const Marketplace = () => (
  <div className="bg-white py-8">
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold mb-4">Marketplaces</h2>
      <div className="space-y-4">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h3 className="font-semibold">BoraBora</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-md">Compare Trips</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Marketplace;
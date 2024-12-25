import React from 'react';
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <h4 className="font-bold mb-2">Need help?</h4>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Customer Support</h4>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Return Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Corporate Info</h4>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Affiliates</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Location</h4>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Store Locator</a></li>
        </ul>
      </div>
    </div>
  </footer>
);
export default Footer;
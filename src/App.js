import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryGrid from './components/CategoryGrid';
import Marketplace from './components/Marketplace';
import Footer from './components/Footer';
const App = () => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <SearchBar />
    <CategoryGrid />
    <Marketplace />
    <Footer />
  </div>
);
export default App;
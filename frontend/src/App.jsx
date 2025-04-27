import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
      />
      <Hero 
        searchQuery={searchQuery} 
        selectedCategory={selectedCategory} 
      />
    </>
  );
}

export default App;

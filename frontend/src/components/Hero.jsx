import React, { useState, useEffect } from 'react';
import Card from './card';
import cafeBg from '/cafe-bg.jpg';

const BASE_URL = "http://localhost:9000";

function Hero({ searchQuery, selectedCategory }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFood();
  }, []);

  const filteredData = data.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.type.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-[#F8F5F2]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#2D1B16]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-[#F8F5F2]">
        <div className="text-red-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Data</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen relative' style={{ 
      backgroundImage: `url(${cafeBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className='absolute inset-0 bg-black/50'></div>
      <div className='relative z-10 py-12'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-white text-center mb-12'>Our Menu</h2>
          <div className='flex flex-wrap gap-8 justify-center px-6'>
            {filteredData.map((item) => (
              <div key={item.name} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <Card 
                  image={item.image}
                  title={item.name}
                  text={item.text}
                  type={item.type}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

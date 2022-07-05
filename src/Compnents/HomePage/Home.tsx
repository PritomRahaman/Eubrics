import React from 'react';
import Cards from '../../Compnents/Cards/Cards';

const Home = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col justify-between'>
      <div className='grid md:grid-cols-3 gap-4 pt-32 px-14 pb-12 m-auto'>
        <Cards title='Health and Hygiene' />
        <Cards title='Communication Skills' />
        <Cards title='Presentation Skills' />
        <Cards title='Technical Skills' />
        <Cards title='Physical Appearance' />
      </div>
    </div>
  );
};

export default Home;

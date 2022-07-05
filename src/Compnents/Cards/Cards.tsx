import React from 'react';
interface PropsInterface {
  title: String;
}
export default function Cards({ title }: PropsInterface) {
  return (
    <div>
      <h2
        className=' block rounded-lg  bg-white ring-1 
             ring-slate-900/5 shadow-lg space-y-5 hover:bg-blue-300  transform transition-all hover:translate-y-2 drop-shadow-lg shadow-blue-500'
      >
        <div className=' items-center space-x-5 px-20 py-20 '>
          <h1 className='text-slate-900 group-hover:text-white hover:text-white text-xl mb-2 font-semibold'>
            {' '}
            {title}
          </h1>
        </div>
      </h2>
    </div>
  );
}

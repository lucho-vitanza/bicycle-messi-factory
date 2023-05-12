import { useContext, createContext, useState } from 'react';
import { ShoppingCardContext } from '../Context';

const BicyCard = (data) => {

  const context = useContext(ShoppingCardContext)
  console.log(data, "bicycard")
  return(
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
    <figure className='relative mb-2 w-full h-4/5'>
      {/* <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{eletecrical}</span> */}
      <img className='w-full h-full object-cover' src= {data.urlImg}  />
      <div></div>
      
      
    </figure>
    <p className='flex justify-between'>
      {/* <span className='text-sm font-light'>{data.data.title}</span>
      <span className='text-lg font-medium'>${data.data.price}</span> */}
    </p>
  </div>
  )
  
}

/*function BicyCard({ text, urlImg, price, coin }) {
  return (
   <div className="flex flex-col space-y-2 columns-2">
      <img alt={text} src={urlImg} className="rounded-md h-24 w-24" />
      <section>
        <p>{price}</p>
        <p>{coin}</p>
        <p>{text}</p>
      </section>
    </div>
  );
}*/

export default BicyCard
import React from 'react';
import BicyCard from '../components/BicyCard';
import cart from '../assets/cart.svg';


const FactoryCard = ({ arrBicycle }) => {
  const listCards = arrBicycle?.map((bicycle, index) => (
    <div key={index} className='w-56 h-80 sm:w-1/4 sm:h-auto p-2'>
      <BicyCard 
        text={bicycle.text}
        price={bicycle.price}
        coin={bicycle.coin}
        urlImg={bicycle.urlImg}
      />
      {/* <a
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        href={bicycle.text + index + bicycle.price}
      >
        <img className='sm:bg-black w-full h-full object-cover rounded-lg p-3' src={cart} alt='cart'  />
      </a> */}
    </div>
  ));

  return <div className='flex flex-wrap'>{listCards}</div>;
}

export default FactoryCard;




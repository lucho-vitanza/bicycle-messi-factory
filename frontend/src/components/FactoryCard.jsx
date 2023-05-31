import React from 'react';
import BicyCard from '../components/BicyCard';
import cart from '../assets/cart.svg';

function FactoryCard({ arrBicycle }) {
  const listCards = arrBicycle?.map((bicycle, index) => (
    <div key={index} className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <BicyCard className='flex justify-between text-sm font-light text-lg font-medium'
        text={bicycle.text}
        price={bicycle.price}
        coin={bicycle.coin}
        urlImg={bicycle.urlImg}
      />
      <a
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        href={bicycle.text + index + bicycle.price}
      >
        <img className='w-full h-full object-cover rounded-lg p-3' src={cart} alt='cart'  />
      </a>
    </div>
  ));

  return <div>{listCards}</div>;
}

export default FactoryCard;

import React from 'react';
import BicyCard from '../components/BicyCard';
import cart from '../assets/cart.svg';

function FactoryCard({ arrBicycle }) {
  const listCards = arrBicycle?.map((bicycle, index) => (
    <div key={index} className='flex flex-col space-y-9'>
      <BicyCard
        text={bicycle.text}
        price={bicycle.price}
        coin={bicycle.coin}
        urlImg={bicycle.urlImg}
      />
      <a
        className='bg-black flex h-10 w-10 rounded-full'
        href={bicycle.text + index + bicycle.price}
      >
        <img src={cart} alt='cart' className='p-3' />
      </a>
    </div>
  ));

  return <div>{listCards}</div>;
}

export default FactoryCard;

import React from 'react';
import BicyCard from '../components/BicyCard';
import cart from '../assets/cart.svg';


const FactoryCard = ({ arrBicycle }) => {
  const listCards = arrBicycle?.map((bicycle, index) => (
    <div key={index} className='w-5/6 h-4/5 '>
      <BicyCard 
        text={bicycle.text}
        price={bicycle.price}
        coin={bicycle.coin}
        urlImg={bicycle.urlImg}
      />
     {/*   <a
        className='bg-#b45309 cursor-pointer w-56 h-60 rounded-lg'
        href={bicycle.text + index + bicycle.price}
      > */}
     {/*    <img className='sm:bg-black w-4/5 h-4/5 object-cover rounded-lg p-3' src={cart} alt='cart'  />
      </a>  */}
    </div>
  ));

  return <div className='flex flex-row item-center'>{listCards}</div>;
}

export default FactoryCard;




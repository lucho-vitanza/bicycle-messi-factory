  import React from 'react';
  import BicyCard from '../components/BicyCard';
  import cart from '../assets/cart.svg';


  const FactoryCard = ({ arrBicycle }) => {
    const listCards = arrBicycle?.map((bicycle, index) => (
      <div key={index} className='mt-32 '>
        <BicyCard 
          text={bicycle.text}
          price={bicycle.price}
          coin={bicycle.coin}
          urlImg={bicycle.urlImg}
        />
      </div>
    ));

    return <>{listCards}</>;
  }

  export default FactoryCard;




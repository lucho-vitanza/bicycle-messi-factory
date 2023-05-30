

function BicyCard({ text, urlImg, price, coin }) {
  return (
   <div className=" relative mb-2  w-full h-4/5 flex flex-col space-y-2 columns-2">
    <img className="w-full h-full items-center object-cover rounded-lg h-24 w-24" alt={text} src={urlImg} />
    <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>BICYCLE</span> 
    <section>
      <p className='text-lg font-medium'>{price}</p>
      <p className='text-sm font-light'>{coin}</p>
      <p className='text-sm font-light'>{text}</p>
    </section>
  
    </div>
    
  );
}
  



export default BicyCard;
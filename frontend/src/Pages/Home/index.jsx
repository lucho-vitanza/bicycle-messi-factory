import {  useEffect } from 'react'
import Layout from '../../components/Layout'
import BicyCard from '../../components/BicyCard'
import { useContext, createContext, useState } from 'react';
import { ShoppingCardContext } from '../../Context';

function Home() {
  const [items, setItems] = useState(null)
  const context = useContext(ShoppingCardContext)

  useEffect (() => {
    fetch('/frontend/src/assets')
    .then(response => response.json())
    .then(data => context.setCount(data))
  }, [])
   console.log("home",context.count)
  return (
    <Layout>
       Home
       <div className='grid gap-4 grid-cols-4 w-full max-w-scren-lg'>
           {
        // count?.map(count => {
        //   //  <BicyCard key={item.id} data={item} />
        // })
       }
       </div>
  
   </Layout>
  )
}


export default Home
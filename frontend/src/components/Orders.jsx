import React, { useEffect, useState }  from 'react';

function Orders() {
    const [orders, setOrders] = useState([]);
    //Esta funcion simula la obtencion de ordenes desde una API
    //This function simulates obtaining orders from an API
    const fetchOrders = () => {
        //Aqui se puede hacer una llamada a una API para obtener ordenes
        //Here you can make an API call to get the orders
        const dummyData = [
            { id: 1, name: 'Order 1', producto: 'Producto A' },
            { id: 2, name: 'Order 2', producto: 'producto B'},
            { id: 3, name: 'order 3', producto: 'producto C'},
        ];
        setOrders(dummyData);
    };
  //llama a fetchOrders cuando el componente se monta por primera vez
  //calls fetchOrders when the component is first mounted
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
        <h2>Ordenes de compra</h2>
      {orders.map((order) => (
        <div key={order.id}>
            <h3>{order.name}</h3>
            <p>Producto: {order.prodcuto}</p>
        </div>
      ))}
    </div>
 );
}


export default Orders;


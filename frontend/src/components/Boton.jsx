import React, { useState } from 'react';

function Boton() {
  const [estadoCompra, setEstadoCompra] = useState('Pendiente'); // Estado inicial de la compra

  const mostrarEstadoCompra = () => {
    alert(`El estado de tu compra es: ${estadoCompra}`);
  };

  return (
    <div >
      <h1>Bycicle</h1>
      <button onClick={mostrarEstadoCompra}>Mostrar Estado de Compra</button>
    </div>
  );
}

export default Boton;

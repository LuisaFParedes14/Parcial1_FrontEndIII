//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react';

const Card = ({ destination, date }) => {
  return (
    <div className="card">
      <h2>Informacion del viaje</h2>
      <p><strong>Destino:</strong> {destination}</p>
      <p><strong>Fecha:</strong> {date}</p>
    </div>
  );
};

export default Card;



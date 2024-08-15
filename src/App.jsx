import React, { useState } from 'react';
import Card from './Card';
import './index.css';

const App = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación para el primer input (destino)
    if (destination.trim().length < 3) {
      alert('El destino debe tener al menos 3 caracteres y no debe comenzar con espacios.');
      return;
    }

    // Validación para el segundo input (fecha)
    if (date.length < 6) {
      alert('La fecha debe tener al menos 6 caracteres.');
      return;
    }

    // Si las validaciones son correctas, muestra la tarjeta
    setShowCard(true);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Destino:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Fecha:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">Enviar</button>
        </div>
      </form>
      {showCard && <Card destination={destination} date={date} />}
    </div>
  );
};

export default App;

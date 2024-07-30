import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/flights')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFlights(data))
      .catch(error => console.error('Error fetching flight data:', error));
  }, []);

  const handleCardClick = (flight) => {
    setSelectedFlight(flight);
  };

  const handleCloseClick = () => {
    setSelectedFlight(null);
  };

  return (
    <div className="flight-status">
      <h1>INDIGO</h1>
      {selectedFlight ? (
        <div className="flip-card">
          <div className="flip-card-inner flipped">
            <div className="flip-card-front">
              <button className="close-button" onClick={handleCloseClick}>Close</button>
              <h2>{selectedFlight.airline}</h2>
              <p>Status: {selectedFlight.status}</p>
              <p>Gate: {selectedFlight.gate}</p>
            </div>
            <div className="flip-card-back">
              <button className="close-button" onClick={handleCloseClick}>Close</button>
              <h2>{selectedFlight.airline}</h2>
              <p>Status: {selectedFlight.status}</p>
              <p>Gate: {selectedFlight.gate}</p>
              <p>Additional Details...</p>
            </div>
          </div>
        </div>
      ) : (
        flights.length > 0 ? (
          flights.map(flight => (
            <div key={flight.id} className="flight" onClick={() => handleCardClick(flight)}>
              <h2>{flight.airline}</h2>
              <p>Status: {flight.status}</p>
              <p>Gate: {flight.gate}</p>
            </div>
          ))
        ) : (
          <p className="no-data">No flight data available.</p>
        )
      )}
    </div>
  );
};

export default App;

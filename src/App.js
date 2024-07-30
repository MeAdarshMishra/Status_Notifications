import React, { useEffect, useState } from 'react';
import './app.css';

const App = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/flights')
      .then(response => {
        console.log('Response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data:', data);
        setFlights(data);
      })
      .catch(error => console.error('Error fetching flight data:', error));
  }, []);

  return (
    <div className="flight-status">
      <h1>Flight Status Notifications</h1>
      {flights.length > 0 ? (
        flights.map(flight => (
          <div key={flight.id} className="flight">
            <h2>{flight.airline}</h2>
            <p>Status: {flight.status}</p>
            <p>Gate: {flight.gate}</p>
          </div>
        ))
      ) : (
        <p>No flight data available.</p>
      )}
    </div>
  );
};

export default App;

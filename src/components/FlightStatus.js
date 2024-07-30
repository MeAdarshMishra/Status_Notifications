import React, { useState, useEffect } from 'react';

const FlightStatus = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/api/flights')
      .then(response => response.json())
      .then(data => setFlights(data));
  }, []);

  return (
    <div className="flight-status">
      <h1>Flight Status</h1>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.airline} - {flight.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightStatus;

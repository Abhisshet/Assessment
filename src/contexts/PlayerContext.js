import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlayerContext = React.createContext();

export const PlayerProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/players')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <PlayerContext.Provider value={{ players }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
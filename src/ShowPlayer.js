import React, { useContext } from 'react';
import PlayerContext from '../contexts/PlayerContext';

function ShowPlayer() {
  const { players } = useContext(PlayerContext);

  return (
    <div className="container mt-4">
      <h2>Player List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Total Matches Played</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.country}</td>
              <td>{player.totalMatchesPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowPlayer;
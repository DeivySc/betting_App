import React from 'react';

/* const teams = ['Team A', 'Team B', 'Team C', 'Team D'];*/
function TeamList({teams}) {
  return (
    <ul>
      {teams.map((team) => (
        <li key={team.id}>{team.nombre}</li>
      ))}
    </ul>
  );
}

export default TeamList;

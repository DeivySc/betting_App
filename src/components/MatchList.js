import React from 'react';
import VersusImage from './VersusImage';

const ListMatch = ({ matches }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const isFutureDate = (dateString) => {
    const matchDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for comparison
    return matchDate >= today;
  };

  return (
    <>
      {matches.map((match, index) => (
        <div key={index} className="bg-gray-800 p-4 flex justify-between items-center rounded">
          <div>
            <h3 className="text-xl font-bold">{match.equipo_local} vs {match.equipo_visitante}</h3>
            <p>Fecha: {formatDate(match.fecha)}</p>
            <p>Resultados: {match.resultado}</p>
            {isFutureDate(match.fecha) && (
              <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Apostar</button>
            )}
          </div>
          <img src={match.img} alt={`Match between ${match.home} and ${match.away}`} className="w-24 h-24 object-cover rounded" />
          {/* <VersusImage
          leftImage={match.local_logo}
          rightImage={match.visitante_logo}
        />
        */}
        </div>
      ))}
    </>
  );
};

function MatchList({ partidos }) {
  return (
    <ListMatch matches={partidos} />
  );
}

export default MatchList;

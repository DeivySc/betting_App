import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TeamList from './components/TeamList';
import MatchList from './components/MatchList';
import BetForm from './components/BetForm';
import VersusImage from './components/VersusImage';

function App() {
  const [equipos, setEquipos] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [apuesta, setApuesta] = useState({ partido: '', equipo_apostado: '', cantidad: '' });
  const [puntos, setPuntos] = useState([]);

  useEffect(() => {
    axios.get('https://betting-backend-sigma.vercel.app//puntos')
      .then(response => {
        setPuntos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los partidos:', error);
      });

    axios.get('https://betting-backend-sigma.vercel.app//equipos')
      .then(response => {
        setEquipos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los equipos:', error);
      });

    axios.get('https://betting-backend-sigma.vercel.app//partidos')
      .then(response => {
        setPartidos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los partidos:', error);
      });
  }, []);

  const handleApuesta = (event) => {
    event.preventDefault();
    axios.post('https://betting-backend-sigma.vercel.app//apuestas', apuesta)
      .then(response => {
        console.log('Apuesta realizada con éxito:', response.data);
      })
      .catch(error => {
        console.error('Error al realizar la apuesta:', error);
      });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="bg-gray-900 p-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <i className="fas fa-heart text-purple-500 mr-2"></i>
          Casa de Apuestas
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-blue-400">Home</a>
          <a href="#" className="text-gray-400">Our Story</a>
          <a href="#" className="text-gray-400">Historical Events</a>
          <a href="#" className="text-gray-400">Digital Museum</a>
          <a href="#" className="text-gray-400">Research & Collections</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Get Tickets</button>
      </header>
      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Lista de Encuentros</h2>
          {/* <div className="text-blue-400 mb-4">
            <i className="fas fa-filter"></i> Filter: <span className="text-purple-500">Special Bets</span>
          </div> */}
          <div className="space-y-4">
            <MatchList partidos={partidos} />
            {/* {[
              { teams: "Man Utd vs Liverpool", time: "20:00 GMT", status: "Live", img: "https://placehold.co/100x100?text=Man+Utd+vs+Liverpool" },
              { teams: "Real Madrid vs Barcelona", time: "22:00 GMT", status: "Upcoming", img: "https://placehold.co/100x100?text=Real+Madrid+vs+Barcelona" },
              { teams: "Bayern vs Dortmund", time: "19:30 GMT", status: "Live", img: "https://placehold.co/100x100?text=Bayern+vs+Dortmund" },
              { teams: "Juventus vs AC Milan", time: "21:45 GMT", status: "Upcoming", img: "https://placehold.co/100x100?text=Juventus+vs+AC+Milan" },
              { teams: "PSG vs Lyon", time: "18:00 GMT", status: "Live", img: "https://placehold.co/100x100?text=PSG+vs+Lyon" }
            ].map((match, index) => (
              <div key={index} className="bg-gray-800 p-4 flex justify-between items-center rounded">
                <div>
                  <h3 className="text-xl font-bold">{match.teams}</h3>
                  <p>Kick-off: {match.time}</p>
                  <p>Status: {match.status}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Bet Now</button>
                </div>
                <img src={match.img} alt={`Match between ${match.teams}`} className="w-24 h-24 object-cover rounded" />
              </div>
            ))} */}
          </div>
        </section>
        {/* <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Tournament Landing</h2>
          <div className="flex space-x-4">
            <img src="https://placehold.co/200x150?text=Tournament+Screen+1" alt="Tournament screen 1" className="rounded" />
            <img src="https://placehold.co/200x150?text=Tournament+Screen+2" alt="Tournament screen 2" className="rounded" />
            <img src="https://placehold.co/200x150?text=Tournament+Screen+3" alt="Tournament screen 3" className="rounded" />
          </div>
        </section> */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Tabla de posiciones</h2>
          <table className="w-full bg-gray-800 rounded">
            <thead>
              <tr className="bg-gray-700">
                <th>ID</th>
                <th>Equipo</th>
                <th>PJ</th>
                <th>PG</th>
                <th>PE</th>
                <th>PP</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
                <th>PTOS</th>
              </tr>
            </thead>
            <tbody>
              {puntos.map((team, index) => (
                <tr key={index} className="border-t border-gray-700 text-center">
                  <td className='p-2'>{index}</td>
                  <td>{team.equipo}</td>
                  <td>{team.juegos_jugados}</td>
                  <td>{team.juegos_ganados}</td>
                  <td>{team.juegos_empatados}</td>
                  <td>{team.juegos_perdidos}</td>
                  <td>{team.goles_favor}</td>
                  <td>-{team.goles_contra}</td>
                  <td>{team.diferencia_goles}</td>
                  <td>{team.puntos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <footer className="p-4 text-center text-gray-500">
        Made with <i className="fas fa-heart text-red-500"></i> by Visily
      </footer>
    </div>
  );

  /* return (
    <div>
      <nav className="container-fluid" style={{backgroundColor: '#f0e68c'}}>
        
      </nav>
      <main className="container">
        <div className="grid">
          <section id="teams" style={{backgroundColor: '#f0e68c'}}>
            <hgroup>
              <h2 style={{color: '#228b22'}}>Teams</h2>
              <h3 style={{color: '#228b22'}}>List of Available Teams</h3>
            </hgroup>
            <TeamList teams={equipos} />
          </section>

          <section id="matches" style={{backgroundColor: '#f0e68c'}}>
            <hgroup>
              <h2 style={{color: '#228b22'}}>Matches</h2>
              <h3 style={{color: '#228b22'}}>Upcoming Matches</h3>
            </hgroup>
            <MatchList />
          </section>

          <section id="bet" style={{backgroundColor: '#f0e68c'}}>
            <hgroup>
              <h2 style={{color: '#228b22'}}>Place Your Bet</h2>
              <h3 style={{color: '#228b22'}}>Select your team and match</h3>
            </hgroup>
            <BetForm />
          </section>
        </div>
      </main>
      <footer className="container" style={{backgroundColor: '#f0e68c'}}>
        <small style={{color: '#228b22'}}><a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a></small>
      </footer>
    </div>
  ); */

  /* return (
    <div>
      <h1>Casa de apuestas</h1>
      <h2>Equipos</h2>
      <ul>
        {equipos.map(equipo => (
          <li key={equipo.id}>{equipo.nombre}</li>
        ))}
      </ul>
      <h2>Partidos</h2>
      <ul>
        {partidos.map(partido => (
          <li key={partido.id}>{partido.equipo_local} vs {partido.equipo_visitante}</li>
        ))}
      </ul>
      <h2>Realizar apuesta</h2>
      <form onSubmit={handleApuesta}>
        <label>
          Partido:
          <select value={apuesta.partido} onChange={(event) => setApuesta({ ...apuesta, partido: event.target.value })}>
            {partidos.map(partido => (
              <option key={partido.id} value={partido.id}>{partido.equipo_local} vs {partido.equipo_visitante}</option>
            ))}
          </select>
        </label>
        <label>
          Equipo apostado:
          <select value={apuesta.equipo_apostado} onChange={(event) => setApuesta({ ...apuesta, equipo_apostado: event.target.value })}>
            {equipos.map(equipo => (
              <option key={equipo.id} value={equipo.id}>{equipo.nombre}</option>
            ))}
          </select>
        </label>
        <label>
          Cantidad:
          <input type="number" value={apuesta.cantidad} onChange={(event) => setApuesta({ ...apuesta, cantidad: event.target.value })} />
        </label>
        <button type="submit">Realizar apuesta</button>
      </form>
    </div>
  ); */
}

export default App;
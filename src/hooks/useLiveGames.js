import { useState, useEffect, useRef } from 'react';
import { INITIAL_GAMES } from '../data/games';

// Marcadores en vivo simulados: cada 4 s puede anotar un equipo.
export default function useLiveGames() {
  const [games, setGames] = useState(INITIAL_GAMES);
  const [simulationLog, setSimulationLog] = useState(['¡Se inicia la transmisión directa en vivo!']);
  const gamesRef = useRef(games);

  useEffect(() => { gamesRef.current = games; }, [games]);

  const addLog = (msgs) => setSimulationLog((prev) => [...msgs, ...prev].slice(0, 5));

  useEffect(() => {
    const timer = setInterval(() => {
      const logs = [];
      const next = gamesRef.current.map((game) => {
        if (!game.isLive || Math.random() <= 0.65) return game;
        const points = Math.random() > 0.5 ? 3 : 2;
        if (Math.random() > 0.5) {
          logs.push(`🏀 ¡${game.homeTeam} anota un triple/canasta de ${points} pts!`);
          return { ...game, homeScore: game.homeScore + points };
        }
        logs.push(`🏀 ¡${game.awayTeam} responde con ${points} puntos en contraataque!`);
        return { ...game, awayScore: game.awayScore + points };
      });
      setGames(next);
      if (logs.length) addLog(logs);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Botón "+ Puntos": fuerza una canasta
  const simulatePlay = (gameId, team) => {
    const game = games.find((g) => g.id === gameId);
    if (!game) return;
    const isHome = team === 'home';
    const added = Math.random() > 0.4 ? 3 : 2;
    setGames((prev) => prev.map((g) => g.id !== gameId ? g : {
      ...g,
      homeScore: isHome ? g.homeScore + added : g.homeScore,
      awayScore: !isHome ? g.awayScore + added : g.awayScore,
    }));
    addLog([`⚡ ¡ACCION DE IMPACTO! ${isHome ? game.homeTeam : game.awayTeam} anota ${added} puntos tras una tremenda jugada del barrio.`]);
  };

  return { games, simulationLog, simulatePlay };
}

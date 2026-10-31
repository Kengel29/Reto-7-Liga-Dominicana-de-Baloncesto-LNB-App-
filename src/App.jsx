import { useState } from 'react';
import { INITIAL_PLAYERS } from './data/players';
import useLiveGames from './hooks/useLiveGames';
import useTrivia from './hooks/useTrivia';
import useComments from './hooks/useComments';
import Header from './components/Header';
import LiveTab from './components/LiveTab';
import StandingsTab from './components/StandingsTab';
import PlayersTab from './components/PlayersTab';
import PlayerModal from './components/PlayerModal';
import FanZoneTab from './components/FanZoneTab';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('live');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [hasVoted, setHasVoted] = useState(false);

  const { games, simulationLog, simulatePlay } = useLiveGames();
  const wall = useComments();
  const trivia = useTrivia();

  const handleVote = (id) => {
    if (hasVoted) return;
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, mvpVotes: p.mvpVotes + 1 } : p)));
    setHasVoted(true);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'live' && <LiveTab games={games} simulationLog={simulationLog} simulatePlay={simulatePlay} />}
        {activeTab === 'standings' && <StandingsTab />}
        {activeTab === 'players' && <PlayersTab players={players} onSelect={setSelectedPlayer} />}
        {activeTab === 'fan-zone' && (
          <FanZoneTab players={players} hasVoted={hasVoted} handleVote={handleVote} wall={wall} trivia={trivia} />
        )}
        {selectedPlayer && <PlayerModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />}
      </main>

      <Footer />
    </div>
  );
}

import { useState } from 'react';
import { Search } from 'lucide-react';
import UserDetailIcon from './UserDetailIcon';

export default function PlayersTab({ players, onSelect }) {
  const [playerSearch, setPlayerSearch] = useState('');
  const [playerPosFilter, setPlayerPosFilter] = useState('ALL');

  const filteredPlayers = players.filter((p) => {
    const q = playerSearch.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(q) || p.team.toLowerCase().includes(q) || p.bio.toLowerCase().includes(q);
    const matchesPos = playerPosFilter === 'ALL' || p.pos.includes(playerPosFilter);
    return matchesSearch && matchesPos;
  });

  return (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Filtros y Búsqueda */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar jugador, barrio o equipo..."
                  value={playerSearch}
                  onChange={(e) => setPlayerSearch(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Posición Filter */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                {['ALL', 'PG', 'SG', 'SF', 'PF', 'C'].map((pos) => (
                  <button
                    key={pos}
                    onClick={() => setPlayerPosFilter(pos)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      playerPosFilter === pos
                        ? 'bg-amber-400 text-slate-950 shadow-md'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {pos === 'ALL' ? 'Todos' : pos}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de Jugadores */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map((player) => (
                <div 
                  key={player.id}
                  className="bg-slate-900 border border-slate-800 hover:border-amber-400/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img 
                      src={player.img} 
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-extrabold text-amber-400 border border-amber-400/30">
                      {player.pos}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-white flex items-center justify-between">
                        {player.name}
                        {player.nameSub && (
                          <span className="text-xs font-normal text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                            "{player.nameSub}"
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 font-medium">{player.team}</p>
                    </div>

                    {/* Stats rápidas */}
                    <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-center">
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase font-bold">PTS</span>
                        <span className="text-lg font-black text-amber-400">{player.pts}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase font-bold">REB</span>
                        <span className="text-lg font-black text-blue-400">{player.reb}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase font-bold">AST</span>
                        <span className="text-lg font-black text-emerald-400">{player.ast}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 italic bg-slate-950/30 p-2 rounded-lg border border-slate-800/40">
                      "{player.bio}"
                    </p>

                    <button
                      onClick={() => onSelect(player)}
                      className="w-full py-2 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-red-600 hover:text-white text-slate-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border border-slate-700 hover:border-transparent"
                    >
                      <UserDetailIcon /> Ver Ficha del Barrio
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
  );
}

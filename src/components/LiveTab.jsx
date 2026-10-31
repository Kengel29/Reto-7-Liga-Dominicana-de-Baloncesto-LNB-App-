import { Flame, Activity, Calendar, Zap, Radio } from 'lucide-react';

export default function LiveTab({ games, simulationLog, simulatePlay }) {
  return (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Banner de directo */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-red-950 p-6 border border-slate-800 shadow-2xl">
              <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                <Flame className="w-80 h-80 text-red-500" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-red-600 text-white shadow-lg animate-pulse uppercase tracking-wider">
                    <Radio className="w-3.5 h-3.5" /> En Vivo Directo Dominicano
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 text-white">
                    Minuto a Minuto de la LNB
                  </h2>
                  <p className="text-slate-300 text-sm mt-1">
                    Simulación de estadísticas, ritmo acelerado y pura emoción en la duela.
                  </p>
                </div>
                
                {/* Ticker de Jugadas */}
                <div className="w-full md:w-80 bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="text-amber-400 font-bold flex items-center gap-1 mb-1 border-b border-slate-800 pb-1">
                    <Activity className="w-3.5 h-3.5" /> Últimas Jugadas del Juego:
                  </div>
                  {simulationLog.map((log, idx) => (
                    <div key={idx} className="text-slate-300 truncate transition-all duration-300">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tarjetas de Partidos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map(game => (
                <div 
                  key={game.id} 
                  className={`rounded-2xl border p-5 transition-all duration-300 relative bg-slate-900/90 shadow-xl ${
                    game.isLive ? 'border-red-500/50 ring-2 ring-red-500/20' : 'border-slate-800'
                  }`}
                >
                  {/* Status header */}
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800 text-xs">
                    <span className="text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" /> {game.venue}
                    </span>
                    {game.isLive ? (
                      <span className="px-2.5 py-0.5 rounded-full font-bold bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        {game.quarter} - {game.timeLeft}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                        {game.status}
                      </span>
                    )}
                  </div>

                  {/* Equipos y Marcador */}
                  <div className="space-y-4">
                    {/* Home Team */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-amber-400 flex items-center justify-center text-white font-extrabold text-sm shadow">
                          {game.homeTeam.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-base text-slate-100">{game.homeTeam}</p>
                          <p className="text-xs text-slate-400">Local</p>
                        </div>
                      </div>
                      <span className="text-3xl font-black font-mono tracking-tight text-white">
                        {game.homeScore}
                      </span>
                    </div>

                    {/* Away Team */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-slate-800 flex items-center justify-center text-white font-extrabold text-sm shadow">
                          {game.awayTeam.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-base text-slate-100">{game.awayTeam}</p>
                          <p className="text-xs text-slate-400">Visitante</p>
                        </div>
                      </div>
                      <span className="text-3xl font-black font-mono tracking-tight text-white">
                        {game.awayScore}
                      </span>
                    </div>
                  </div>

                  {/* Cuartos Resumen */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-2">Anotación por Cuartos</p>
                    <div className="grid grid-cols-4 gap-1 text-center text-xs bg-slate-950 p-2 rounded-lg border border-slate-800/50">
                      <div><span className="text-slate-500 block text-[10px]">Q1</span>{game.homeQScores[0]} - {game.awayQScores[0]}</div>
                      <div><span className="text-slate-500 block text-[10px]">Q2</span>{game.homeQScores[1]} - {game.awayQScores[1]}</div>
                      <div><span className="text-slate-500 block text-[10px]">Q3</span>{game.homeQScores[2]} - {game.awayQScores[2]}</div>
                      <div><span className="text-slate-500 block text-[10px]">Q4</span>{game.homeQScores[3]} - {game.awayQScores[3]}</div>
                    </div>
                  </div>

                  {/* Interacción Simulador */}
                  {game.isLive && (
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => simulatePlay(game.id, 'home')}
                        className="flex-1 py-1.5 px-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1"
                      >
                        <Zap className="w-3.5 h-3.5 text-blue-400" />
                        + Puntos {game.homeTeam.split(' ')[0]}
                      </button>
                      <button
                        onClick={() => simulatePlay(game.id, 'away')}
                        className="flex-1 py-1.5 px-2 bg-red-600/20 hover:bg-red-600/40 text-red-300 border border-red-500/30 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1"
                      >
                        <Zap className="w-3.5 h-3.5 text-red-400" />
                        + Puntos {game.awayTeam.split(' ')[0]}
                      </button>
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>
  );
}

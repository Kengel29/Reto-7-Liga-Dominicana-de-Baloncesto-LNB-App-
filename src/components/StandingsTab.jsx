import { Trophy } from 'lucide-react';
import { TEAMS } from '../data/teams';

export default function StandingsTab({  }) {
  return (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-black text-white flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-amber-400" /> Standings Oficiales LNB
                  </h2>
                  <p className="text-sm text-slate-400">
                    Tabla general de victorias y derrotas rumbo a los Playoffs
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold bg-slate-950 p-2 rounded-xl border border-slate-800">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span> Zona Clasificación (1-6)
                </div>
              </div>

              {/* Tabla de Equipos */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-950/50">
                      <th className="p-3">Pos</th>
                      <th className="p-3">Equipo</th>
                      <th className="p-3 text-center">G</th>
                      <th className="p-3 text-center">P</th>
                      <th className="p-3 text-center">PCT</th>
                      <th className="p-3 text-center">Casa</th>
                      <th className="p-3 text-center">Visitante</th>
                      <th className="p-3 text-center">Racha</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-sm">
                    {TEAMS.map((team, idx) => {
                      const [wins, losses] = team.record.split('-').map(Number);
                      const pct = (wins / (wins + losses)).toFixed(3);
                      const isPlayoff = idx < 6;

                      return (
                        <tr 
                          key={team.id}
                          className={`hover:bg-slate-800/40 transition-colors ${
                            isPlayoff ? 'bg-slate-900/30' : ''
                          }`}
                        >
                          <td className="p-3 font-bold text-slate-300">
                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs ${
                              isPlayoff ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {idx + 1}
                            </span>
                          </td>
                          <td className="p-3 font-bold text-white flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${team.colors} flex items-center justify-center text-xs font-black shadow-md`}>
                              {team.name.substring(0, 2)}
                            </div>
                            <div>
                              <span>{team.name}</span>
                              <span className="block text-[11px] text-slate-400 font-normal">{team.city}</span>
                            </div>
                          </td>
                          <td className="p-3 text-center font-semibold text-emerald-400">{wins}</td>
                          <td className="p-3 text-center font-semibold text-red-400">{losses}</td>
                          <td className="p-3 text-center font-mono font-bold text-slate-200">{pct}</td>
                          <td className="p-3 text-center text-slate-300">{team.home}</td>
                          <td className="p-3 text-center text-slate-300">{team.away}</td>
                          <td className="p-3 text-center">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                              team.streak.startsWith('W') 
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                            }`}>
                              {team.streak}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
  );
}

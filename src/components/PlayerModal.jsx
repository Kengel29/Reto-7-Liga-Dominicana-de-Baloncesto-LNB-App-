

export default function PlayerModal({ player, onClose }) {
  return (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-scaleUp">
              <div className="relative h-56 bg-slate-950">
                <img 
                  src={player.img} 
                  alt={player.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <button
                  onClick={() => onClose()}
                  className="absolute top-3 right-3 bg-slate-950/80 hover:bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-slate-700"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-400 text-slate-950 uppercase tracking-wider">
                    {player.pos}
                  </span>
                  <h2 className="text-2xl font-black text-white mt-1">{player.name}</h2>
                  <p className="text-xs text-slate-300">{player.team}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">Origen & Raíces de Barrio</h4>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                    {player.bio}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                  <div>
                    <p className="text-xs text-slate-400 font-bold">PUNTOS</p>
                    <p className="text-2xl font-black text-amber-400">{player.pts}</p>
                    <p className="text-[10px] text-slate-500">Por Partido</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold">REBOTES</p>
                    <p className="text-2xl font-black text-blue-400">{player.reb}</p>
                    <p className="text-[10px] text-slate-500">Por Partido</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold">ASISTENCIAS</p>
                    <p className="text-2xl font-black text-emerald-400">{player.ast}</p>
                    <p className="text-[10px] text-slate-500">Por Partido</p>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => onClose()}
                    className="px-5 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white text-xs font-bold rounded-xl hover:opacity-90 transition"
                  >
                    Cerrar Ficha
                  </button>
                </div>
              </div>
            </div>
          </div>
  );
}

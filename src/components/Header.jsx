import { Trophy, Flame, Users, Sparkles, Moon, Sun, Radio } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }) {
  return (
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-slate-800 bg-slate-950/80 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
          
          {/* LOGO & ESLOGAN */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 via-red-600 to-amber-400 p-1 shadow-lg shadow-red-600/20 animate-pulse">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Flame className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-amber-400">
                  LNB <span className="text-xs px-2 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30">DOMINICANA</span>
                </h1>
              </div>
              <p className="text-xs text-amber-400 font-medium italic">
                "El basket une barrios y pasiones" 🇩🇴
              </p>
            </div>
          </div>

          {/* NAVEGACIÓN PRINCIPAL */}
          <nav className="flex items-center gap-1 sm:gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('live')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'live' 
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Radio className={`w-4 h-4 ${activeTab === 'live' ? 'animate-pulse text-red-400' : ''}`} />
              Partidos & Vivo
            </button>

            <button
              onClick={() => setActiveTab('standings')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'standings' 
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              Posiciones
            </button>

            <button
              onClick={() => setActiveTab('players')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'players' 
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              Jugadores
            </button>

            <button
              onClick={() => setActiveTab('fan-zone')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'fan-zone' 
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Barrio Fan Zone
            </button>
          </nav>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-amber-400 transition-all shadow-inner"
            title="Cambiar Modo de Color"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-800" />}
          </button>

        </div>
      </header>
  );
}

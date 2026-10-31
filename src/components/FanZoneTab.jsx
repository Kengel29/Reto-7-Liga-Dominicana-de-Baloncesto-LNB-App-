import { Award, MessageSquare, HelpCircle, CheckCircle2 } from 'lucide-react';
import { TEAMS } from '../data/teams';
import { TRIVIA_QUESTIONS } from '../data/trivia';

export default function FanZoneTab({ players, hasVoted, handleVote, wall, trivia }) {
  const { newComment, setNewComment, comments, selectedTeamFan, setSelectedTeamFan, handleAddComment } = wall;
  const { currentQuestion, selectedAnswer, triviaScore, triviaFinished, handleAnswerTrivia, handleNextTrivia, resetTrivia } = trivia;

  return (
          <div className="space-y-8 animate-fadeIn">
            
            {/* VOTACIÓN MVP DEL BARRIO */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-400/10 text-amber-400 rounded-xl border border-amber-400/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-white">Votación MVP del Barrio - LNB 2026</h2>
                  <p className="text-xs text-slate-400">¡Elige a tu jugador favorito de la semana! Un voto por fanático.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {players.map((p) => (
                  <div key={p.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-slate-100">{p.name}</p>
                      <p className="text-xs text-slate-400">{p.team}</p>
                      <span className="inline-block text-xs font-black text-amber-400 mt-1">
                        🔥 {p.mvpVotes} Votos
                      </span>
                    </div>

                    <button
                      onClick={() => handleVote(p.id)}
                      disabled={hasVoted}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition ${
                        hasVoted 
                          ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-red-600 hover:opacity-90 text-white shadow-md'
                      }`}
                    >
                      {hasVoted ? 'Votado' : 'Votar MVP'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN DE COMUNIDAD / CÁNTICOS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Muro de la Fanaticada */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                    <MessageSquare className="w-5 h-5 text-blue-400" /> Cánticos y Mensajes de las Gradas
                  </h3>

                  <form onSubmit={handleAddComment} className="space-y-3 mb-6">
                    <div className="flex gap-2">
                      <select 
                        value={selectedTeamFan} 
                        onChange={(e) => setSelectedTeamFan(e.target.value)}
                        className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
                      >
                        {TEAMS.map(t => (
                          <option key={t.id} value={t.name.split(' ')[0]}>{t.name}</option>
                        ))}
                      </select>
                      <input
                        type="text"
                        placeholder="Escribe tu mensaje o cántico dominicano..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition shadow"
                    >
                      Publicar Cántico 📣
                    </button>
                  </form>

                  {/* Lista de Comentarios */}
                  <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                    {comments.map((c) => (
                      <div key={c.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-xs space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-amber-400">{c.user} <span className="text-[10px] text-slate-500">({c.team})</span></span>
                          <span className="text-[10px] text-slate-500">{c.time}</span>
                        </div>
                        <p className="text-slate-200">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TRIVIA EXPRESS LNB */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                    <HelpCircle className="w-5 h-5 text-amber-400" /> Trivia Express LNB
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">Demuestra qué tanto sabes del baloncesto dominicano.</p>

                  {!triviaFinished ? (
                    <div className="space-y-4">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                          Pregunta {currentQuestion + 1} de {TRIVIA_QUESTIONS.length}
                        </span>
                        <p className="text-sm font-bold text-white">
                          {TRIVIA_QUESTIONS[currentQuestion].question}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {TRIVIA_QUESTIONS[currentQuestion].options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleAnswerTrivia(idx)}
                            disabled={selectedAnswer !== null}
                            className={`w-full text-left p-3 rounded-xl text-xs font-semibold transition border ${
                              selectedAnswer === null
                                ? 'bg-slate-950 border-slate-800 hover:border-amber-400/50 text-slate-200'
                                : idx === TRIVIA_QUESTIONS[currentQuestion].correct
                                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                                : selectedAnswer === idx
                                ? 'bg-red-500/20 border-red-500 text-red-300'
                                : 'bg-slate-950 border-slate-800 opacity-50'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>

                      {selectedAnswer !== null && (
                        <button
                          onClick={handleNextTrivia}
                          className="w-full py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold text-xs rounded-xl transition mt-2"
                        >
                          Siguiente Pregunta ➡️
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 space-y-4 bg-slate-950 rounded-xl border border-slate-800 p-6">
                      <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                      <h4 className="text-xl font-bold text-white">¡Trivia Completada!</h4>
                      <p className="text-sm text-slate-300">
                        Obtuviste <span className="font-extrabold text-amber-400">{triviaScore}</span> de <span className="font-extrabold text-white">{TRIVIA_QUESTIONS.length}</span> correctas.
                      </p>
                      <button
                        onClick={resetTrivia}
                        className="px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-300 transition"
                      >
                        Intentar de Nuevo 🔄
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
  );
}

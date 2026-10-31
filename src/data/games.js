// Datos de ejemplo (editables)
export const INITIAL_GAMES = [
  {
    id: 'game-1',
    isLive: true,
    quarter: '4to Cuarto',
    timeLeft: '02:45',
    homeTeam: 'Metros de Santiago',
    awayTeam: 'Titanes del Distrito',
    homeScore: 88,
    awayScore: 85,
    homeQScores: [22, 24, 20, 22],
    awayQScores: [20, 21, 23, 21],
    venue: 'Gran Arena del Cibao, Santiago',
    stats: { homeFg: '48%', awayFg: '44%', home3p: '38%', away3p: '31%' }
  },
  {
    id: 'game-2',
    isLive: false,
    status: 'Finalizado',
    quarter: 'FINAL',
    timeLeft: '00:00',
    homeTeam: 'Reales de La Vega',
    awayTeam: 'Leones del SD',
    homeScore: 94,
    awayScore: 90,
    homeQScores: [25, 20, 22, 27],
    awayQScores: [22, 25, 18, 25],
    venue: 'Palacio de los Deportes Fernando Teruel, La Vega',
    stats: { homeFg: '51%', awayFg: '47%', home3p: '40%', away3p: '35%' }
  },
  {
    id: 'game-3',
    isLive: false,
    status: 'Hoy - 8:00 PM',
    quarter: 'Por Empezar',
    timeLeft: '12:00',
    homeTeam: 'Indios de SFM',
    awayTeam: 'Cañeros del Este',
    homeScore: 0,
    awayScore: 0,
    homeQScores: [0, 0, 0, 0],
    awayQScores: [0, 0, 0, 0],
    venue: 'Pabellón Mario Ortega, San Francisco',
    stats: { homeFg: '0%', awayFg: '0%', home3p: '0%', away3p: '0%' }
  }
];

# 🏀 LNB Fans – Liga Dominicana de Baloncesto (app fan-made)

**Grupo:** 7
**Integrantes:**   
  Kendri Tatis 100263465
  Rodolfo Starlyn Espinal Hilario 100100513
  Aneudy de la Cruz 100465614
  César Adrián Aybar Montes De Oca 100692670

## Descripción
App web fan-made para atraer a jóvenes a la LNB. Tiene 4 pestañas: **Partidos & Vivo** (marcadores simulados en tiempo real), **Posiciones**, **Jugadores** (búsqueda, filtro por posición y ficha) y **Barrio Fan Zone** (votación MVP, muro de cánticos y trivia). Lema: *"El basket une barrios y pasiones"*. Los datos son de ejemplo.

## Estructura
```
index.html              → HTML principal
src/main.jsx            → script de arranque de React
src/App.jsx             → componente raíz (estado global y pestañas)
src/styles/index.css    → CSS (Tailwind + reglas base)
src/data/               → equipos, jugadores, partidos y trivia
src/hooks/              → useLiveGames, useTrivia, useComments
src/components/         → Header, LiveTab, StandingsTab, PlayersTab,
                          PlayerModal, FanZoneTab, Footer, UserDetailIcon
tailwind.config.js      → colores/animaciones (fadeIn, scaleUp)
```

## Tecnologías
React 18 · JavaScript · HTML5 · CSS3 (Tailwind CSS) · Vite · lucide-react · Git

## Cómo ejecutarlo
```bash
npm install
npm run dev
npm run build
```

## Uso de React (presentación)
- **Componentes:** cada pestaña y sección es un componente con props.
- **Estado (`useState`):** pestaña activa, modo oscuro, votos, jugador seleccionado, búsqueda, trivia.
- **Efectos (`useEffect`):** `setInterval` con limpieza en `useLiveGames` para los marcadores en vivo.
- **Hooks personalizados:** separan la lógica de la interfaz.


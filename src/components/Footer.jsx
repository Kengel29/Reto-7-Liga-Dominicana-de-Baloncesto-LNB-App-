

export default function Footer({  }) {
  return (
      <footer className="border-t border-slate-800 mt-12 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026 LNB Fan-App Dominicano. Creado con pasión por el baloncesto de los barrios.</p>
          <div className="flex gap-4">
            <span className="hover:text-amber-400 cursor-pointer">Términos</span>
            <span className="hover:text-amber-400 cursor-pointer">Privacidad</span>
            <span className="hover:text-amber-400 cursor-pointer">LNB Oficial</span>
          </div>
        </div>
      </footer>
  );
}

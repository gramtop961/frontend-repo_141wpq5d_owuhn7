import HeroHUD from './components/HeroHUD';
import FeatureGrid from './components/FeatureGrid';
import FlowTabs from './components/FlowTabs';
import EscrowShowcase from './components/EscrowShowcase';

function App() {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(180deg,#0b0f14, #0f141a_30%,#0b0f14_100%)] text-white">
      {/* Top nav (minimal, mobile-first) */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0f14]/70 backdrop-blur-xl" role="banner">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2" aria-label="Brixel home">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_30px_rgba(245,158,11,0.5)]" aria-hidden />
            <span className="font-manrope text-lg font-extrabold tracking-tight">Brixel</span>
          </a>
          <nav aria-label="Primary">
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10" aria-label="Sign in">
                Sign in
              </button>
              <button className="rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-amber-400" aria-label="Get started">
                Get started
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main id="main" role="main">
        <HeroHUD />
        <FeatureGrid />
        <FlowTabs />
        <EscrowShowcase />
      </main>

      <footer className="border-t border-white/10 px-4 py-8" role="contentinfo">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Brixel. Building trust in construction.</p>
          <div className="flex items-center gap-3">
            <a className="text-xs text-white/70 hover:text-white" href="#" aria-label="Privacy policy">Privacy</a>
            <a className="text-xs text-white/70 hover:text-white" href="#" aria-label="Terms of service">Terms</a>
            <a className="text-xs text-white/70 hover:text-white" href="#" aria-label="Contact us">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

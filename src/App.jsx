import HeroHUD from './components/HeroHUD';
import FeatureGrid from './components/FeatureGrid';
import FlowTabs from './components/FlowTabs';
import EscrowShowcase from './components/EscrowShowcase';

function App() {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(180deg,#0b0f14,#0f141a_30%,#0b0f14_100%)] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur" role="banner">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2" aria-label="Brixel home">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_0_30px_rgba(245,158,11,0.5)]" aria-hidden />
            <span className="font-manrope text-lg font-extrabold tracking-tight">Brixel</span>
          </a>
          <nav className="hidden sm:block" aria-label="Primary">
            <div className="flex items-center gap-2">
              <a href="#systems" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10">Systems</a>
              <a href="#flows" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10">Flows</a>
              <a href="#escrow" className="rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-black hover:bg-orange-400">Escrow</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main id="main" role="main" className="mx-auto max-w-6xl px-4">
        <div className="pt-6" />
        {/* 3D HUD hero keeps the original functionality while elevating visuals */}
        <HeroHUD />

        <section id="systems">
          <FeatureGrid />
        </section>

        <section id="flows">
          <FlowTabs />
        </section>

        <section id="escrow">
          <EscrowShowcase />
        </section>
      </main>
    </div>
  );
}

export default App;

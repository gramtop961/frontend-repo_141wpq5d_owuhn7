import Hero3D from './components/Hero3D';
import WorkInProgressMarquee from './components/WorkInProgressMarquee';
import ConstructionAnimations from './components/ConstructionAnimations';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(180deg,#0b0f14, #0f141a_30%,#0b0f14_100%)] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur" role="banner">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2" aria-label="Brixel home">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_0_30px_rgba(245,158,11,0.5)]" aria-hidden />
            <span className="font-manrope text-lg font-extrabold tracking-tight">Brixel</span>
          </a>
          <nav className="hidden sm:block" aria-label="Primary">
            <div className="flex items-center gap-2">
              <a href="#animations" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10">Animations</a>
              <a href="#contact" className="rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-black hover:bg-orange-400">Get started</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero with Spline 3D */}
      <main id="main" role="main" className="mx-auto max-w-6xl px-4">
        <div className="pt-6" />
        <Hero3D />
        <WorkInProgressMarquee />
        <div id="animations" />
        <ConstructionAnimations />
        <div id="contact" />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;

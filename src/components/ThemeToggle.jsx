import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (mode) => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = mode === 'dark' || (mode === 'system' && prefersDark);
    root.classList.toggle('dark', enableDark);
    root.style.colorScheme = enableDark ? 'dark' : 'light';
  };

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  };

  const icon = theme === 'dark' ? <Moon className="h-4 w-4" /> : theme === 'light' ? <Sun className="h-4 w-4" /> : (
    <div className="relative h-4 w-4">
      <Sun className="absolute h-4 w-4 text-amber-400" />
      <Moon className="absolute h-4 w-4 text-blue-300 opacity-70" />
    </div>
  );

  const label = theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'System';

  return (
    <button
      onClick={toggle}
      aria-label={`Toggle theme, current: ${label}`}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md hover:bg-white/10"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, SunMedium } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="btn btn-ghost btn-sm opacity-0">Toggle theme</button>;
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={cn(
        'inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-100 transition hover:border-cyan-400/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40',
        'shadow-[0_12px_50px_-30px_rgba(56,189,248,0.8)]'
      )}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

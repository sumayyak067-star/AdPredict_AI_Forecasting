'use client';

import Link from 'next/link';
import { BarChart3, Layers, Sparkles, TrendingUp, Zap } from 'lucide-react';

const menu = [
  { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { href: '/prediction', label: 'Prediction', icon: Zap },
  { href: '/analytics', label: 'Analytics', icon: TrendingUp },
  { href: '/model-performance', label: 'Performance', icon: Layers },
  { href: '/about', label: 'About', icon: Sparkles }
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-[calc(100vh-96px)] w-72 shrink-0 flex-col gap-4 border-r border-white/10 bg-slate-950/80 px-4 py-6 text-slate-300 lg:flex">
      <div className="space-y-2 pb-4">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Analytics Hub</p>
        <p className="text-2xl font-semibold text-white">Insights</p>
      </div>
      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition hover:bg-white/5 hover:text-white"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Pro tip</p>
        <p className="mt-2 leading-6 text-slate-300">Use the prediction page to forecast sales from campaign budgets in real time.</p>
      </div>
    </aside>
  );
}

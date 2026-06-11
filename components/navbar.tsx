'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Prediction', href: '/prediction' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Performance', href: '/model-performance' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' }
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-lg font-bold tracking-tight text-slate-100 transition-colors hover:text-cyan-300"
          aria-label="AdPredict Home"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 shadow-lg shadow-cyan-500/30 font-bold text-lg"
          >
            A
          </motion.div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">AdPredict</div>
            <div className="text-xs text-slate-500">AI Forecasting</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                isActive(item.href)
                  ? 'text-cyan-300'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 -z-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-100 transition hover:border-cyan-400/40 hover:bg-slate-900/80 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
      >
        <div className="space-y-2 px-4 py-4">
          {links.map((item) => (
            <motion.div key={item.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
              <Link
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  isActive(item.href)
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </header>
  );
}

'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-12 text-slate-400 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2"
      >
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">AdPredict</p>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Premium advertising sales predictions with intelligent insights, polished visuals, and enterprise-ready analytics.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Resources</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Model documentation</li>
            <li>Data analytics</li>
            <li>Performance metrics</li>
          </ul>
        </div>
      </motion.div>
    </footer>
  );
}

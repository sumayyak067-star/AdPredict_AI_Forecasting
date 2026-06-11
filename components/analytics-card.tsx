'use client';

import { motion } from 'framer-motion';

interface AnalyticsCardProps {
  title: string;
  subtitle: string;
  value: string;
  description: string;
}

export function AnalyticsCard({ title, subtitle, value, description }: AnalyticsCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="glass rounded-3xl border border-white/10 p-6 shadow-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{title}</p>
          <p className="mt-2 text-lg font-semibold text-white">{subtitle}</p>
        </div>
        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">{value}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
    </motion.article>
  );
}

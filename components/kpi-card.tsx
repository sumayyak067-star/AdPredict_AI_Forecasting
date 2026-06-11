'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface KPIProps {
  title: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  accentClass: string;
}

export function KpiCard({ title, value, delta, icon: Icon, accentClass }: KPIProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass rounded-3xl border border-white/10 p-6 shadow-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-3xl ${accentClass}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-400">{delta}</p>
    </motion.div>
  );
}

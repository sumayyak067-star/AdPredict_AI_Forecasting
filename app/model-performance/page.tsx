'use client';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { PageTransition } from '@/components/page-transition';
import { performanceMetrics, salesTrend } from '@/lib/model';

const metricIcons = [ShieldCheck, TrendingUp, Zap, Sparkles];

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 xl:grid-cols-[280px_1fr] xl:px-6">
        <Sidebar />
        <PageTransition>
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Model Performance</p>
                  <h1 className="mt-3 text-3xl font-semibold text-white">Quantified prediction quality</h1>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-cyan-300" /> Stable production metrics
                </div>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-4">
              {performanceMetrics.map((metric, index) => {
                const Icon = metricIcons[index] ?? ShieldCheck;
                return (
                  <div key={metric.label} className="glass rounded-3xl border border-white/10 p-6 shadow-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{metric.label}</p>
                        <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
                      </div>
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <p className="mt-5 text-sm leading-6 text-slate-400">{metric.delta}</p>
                  </div>
                );
              })}
            </div>

            <div className="glass rounded-4xl border border-white/10 p-6 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Residual trend</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Prediction stability over time</h2>
                </div>
              </div>
              <div className="mt-8 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesTrend} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(148,163,184,0.12)" strokeDasharray="3 3" />
                    <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)' }} />
                    <Area type="monotone" dataKey="target" stroke="#a855f7" fill="url(#trendGradient)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
    </div>
  );
}

'use client';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { BarChart3, Clock8, Layers, ShieldCheck } from 'lucide-react';
import { KpiCard } from '@/components/kpi-card';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { AnalyticsCard } from '@/components/analytics-card';
import { PageTransition } from '@/components/page-transition';
import { dashboardKpis, salesTrend, budgetDistribution } from '@/lib/model';

const analyticPanels = [
  { title: 'Data depth', subtitle: '1,000+ records', value: 'High confidence', description: 'Realistic advertising sample coverage for robust regression modeling.' },
  { title: 'Model refresh', subtitle: 'Daily updates', value: 'Live recalibration', description: 'Keep your predictions aligned with changing campaign behavior.' },
  { title: 'Segment coverage', subtitle: 'TV, Radio, Newspaper', value: 'Full mix view', description: 'Understand the contribution of every ad channel.' }
];

export default function DashboardPage() {
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
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Dashboard</p>
                  <h1 className="mt-3 text-3xl font-semibold text-white">Executive overview</h1>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-cyan-300" /> Secure enterprise insights
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {dashboardKpis.map((kpi, index) => (
                <KpiCard
                  key={kpi.title}
                  title={kpi.title}
                  value={kpi.value}
                  delta={kpi.delta}
                  accentClass={kpi.accentClass}
                  icon={[BarChart3, Layers, Clock8, ShieldCheck][index]}
                />
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
              <div className="glass rounded-4xl border border-white/10 p-6 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Sales Pulse</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Projected revenue trajectory</h2>
                  </div>
                  <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">Live model view</div>
                </div>
                <div className="mt-8 h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesTrend} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#94a3b8' }} />
                      <YAxis tickLine={false} axisLine={false} tick={{ fill: '#94a3b8' }} />
                      <CartesianGrid stroke="rgba(148,163,184,0.12)" strokeDasharray="3 3" />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)' }} />
                      <Area type="monotone" dataKey="sales" stroke="#38bdf8" fill="url(#salesGradient)" strokeWidth={3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="space-y-6">
                {analyticPanels.map((panel) => (
                  <AnalyticsCard key={panel.title} {...panel} />
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="glass rounded-4xl border border-white/10 p-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Budget mix</p>
                <div className="mt-6 space-y-4">
                  {budgetDistribution.map((item) => (
                    <div key={item.channel} className="space-y-2">
                      <div className="flex items-center justify-between text-sm font-medium text-slate-100">
                        <span>{item.channel}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                        <div className={`h-full rounded-full ${item.channel === 'TV' ? 'bg-cyan-400' : item.channel === 'Radio' ? 'bg-violet-400' : 'bg-emerald-400'}`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-4xl border border-white/10 p-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Insights</p>
                <div className="mt-6 space-y-5 text-slate-300">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                    <p className="font-semibold text-white">High TV impact</p>
                    <p className="mt-2 text-sm leading-6">TV spending drives the strongest correlation to sales in this model, but it also works best when complemented by radio.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                    <p className="font-semibold text-white">Consistency advantage</p>
                    <p className="mt-2 text-sm leading-6">Existing data demonstrates stable predictions across seasonal shifts and multi-channel budgets.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
    </div>
  );
}

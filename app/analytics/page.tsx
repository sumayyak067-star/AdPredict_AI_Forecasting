'use client';

import { Bar, BarChart, CartesianGrid, Cell, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Cpu, LayoutGrid, Percent } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { DataTable } from '@/components/data-table';
import { PageTransition } from '@/components/page-transition';
import { budgetDistribution, correlationMatrix, datasetPreview, featureImportances, salesTrend } from '@/lib/model';

export default function AnalyticsPage() {
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
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Analytics</p>
                  <h1 className="mt-3 text-3xl font-semibold text-white">Feature and correlation intelligence</h1>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <LayoutGrid className="h-4 w-4 text-violet-300" /> High-fidelity views
                </div>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="glass rounded-4xl border border-white/10 p-6 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Feature importance</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Random Forest drivers</h2>
                  </div>
                  <Cpu className="h-6 w-6 text-cyan-300" />
                </div>
                <div className="mt-8 h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={featureImportances} margin={{ top: 10, left: -10, right: 0, bottom: 0 }}>
                      <CartesianGrid stroke="rgba(148,163,184,0.12)" strokeDasharray="3 3" />
                      <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                      <YAxis tickFormatter={(value) => `${Math.round(value * 100)}%`} tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)' }} />
                      <Bar dataKey="value" fill="#38bdf8" radius={[12, 12, 0, 0]}>
                        {featureImportances.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={['#38bdf8', '#818cf8', '#22c55e', '#f97316', '#f43f5e'][index % 5]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="glass rounded-4xl border border-white/10 p-6 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Correlation</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Channel relationships</h2>
                  </div>
                  <Percent className="h-6 w-6 text-violet-300" />
                </div>
                <div className="mt-8 overflow-x-auto">
                  <table className="min-w-full divide-y divide-white/10 text-sm text-slate-300">
                    <thead className="text-left text-xs uppercase tracking-[0.24em] text-slate-500">
                      <tr>
                        <th className="px-4 py-3">Channel</th>
                        <th className="px-4 py-3">TV</th>
                        <th className="px-4 py-3">Radio</th>
                        <th className="px-4 py-3">Newspaper</th>
                        <th className="px-4 py-3">Sales</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 bg-slate-900/80">
                      {correlationMatrix.map((row) => (
                        <tr key={row.name}>
                          <td className="px-4 py-4 font-medium text-white">{row.name}</td>
                          <td className="px-4 py-4">{row.tv}</td>
                          <td className="px-4 py-4">{row.radio}</td>
                          <td className="px-4 py-4">{row.newspaper}</td>
                          <td className="px-4 py-4">{row.sales}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.7fr_0.6fr]">
              <div className="glass rounded-4xl border border-white/10 p-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Sales trend</p>
                <div className="mt-8 h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesTrend} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                      <CartesianGrid stroke="rgba(148,163,184,0.12)" strokeDasharray="3 3" />
                      <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)' }} />
                      <Bar dataKey="sales" fill="#818cf8" radius={[12, 12, 0, 0]} />
                      <Bar dataKey="target" fill="#22c55e" radius={[12, 12, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="glass rounded-4xl border border-white/10 p-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Budget distribution</p>
                <div className="mt-8 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={320}>
                    <RadarChart data={budgetDistribution} outerRadius="80%">
                      <PolarGrid stroke="rgba(148,163,184,0.18)" />
                      <PolarAngleAxis dataKey="channel" tick={{ fill: '#94a3b8' }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8' }} />
                      <Radar name="Budget" dataKey="value" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.35} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="glass rounded-4xl border border-white/10 p-6 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Data explorer</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Advertising record snapshot</h2>
                </div>
              </div>
              <div className="mt-6">
                <DataTable rows={datasetPreview} />
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
    </div>
  );
}

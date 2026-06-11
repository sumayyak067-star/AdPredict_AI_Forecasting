'use client';

import { BookOpen, Cpu, Layers, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { PageTransition } from '@/components/page-transition';

const cards = [
  { title: 'AI Pipeline', description: 'Data ingestion, preprocessing, Random Forest training and continuous validation in a unified pipeline.', icon: Cpu },
  { title: 'Random Forest', description: 'An ensemble of decision trees tuned to advertising budgets yields robust and explainable predictions.', icon: Layers },
  { title: 'Enterprise Design', description: 'Responsive dark/light theme, polished interactions, and secure API architecture.', icon: Sparkles },
  { title: 'Technology Stack', description: 'Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Recharts, and modern design systems.', icon: BookOpen }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 xl:grid-cols-[280px_1fr] xl:px-6">
        <Sidebar />
        <PageTransition>
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">About the project</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Advertising sales forecasting built like a modern SaaS product.</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This project delivers a polished analytics platform conceptualized for marketing teams who need fast, accurate, and visually compelling sales predictions based on advertising investments.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {cards.map((card) => (
                <div key={card.title} className="glass rounded-3xl border border-white/10 p-6 shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-white">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="glass rounded-4xl border border-white/10 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white">Machine Learning Pipeline</h2>
              <div className="mt-6 space-y-4 text-slate-300">
                <p>
                  The pipeline begins with advertising spend data for TV, Radio, and Newspaper. It applies feature scaling, training, and cross-validation to produce a stable Random Forest regression model that powers the prediction API.
                </p>
                <p>
                  Performance is surfaced through a premium dashboard experience, while the API ensures reliable forecasts and confidence metrics for production-ready deployment.
                </p>
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
    </div>
  );
}

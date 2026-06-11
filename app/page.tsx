'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

const features = [
  { title: 'Predictive Accuracy', description: 'High-fidelity Random Forest regression tuned for advertising spend and sales impact.', icon: BarChart3 },
  { title: 'Intelligent Insights', description: 'Auto-generated recommendations help you optimize TV, Radio, and Newspaper budgets.', icon: TrendingUp },
  { title: 'Secure Forecasting', description: 'Built with enterprise-level reliability and fast API performance.', icon: ShieldCheck },
  { title: 'Modern Dashboard', description: 'A premium SaaS-grade analytics experience for data-driven teams.', icon: Sparkles }
];

const testimonials = [
  { name: 'Mia Chen', role: 'Head of Growth', quote: 'AdPredict turned our media planning into a clear revenue engine. The UI and predictive confidence are outstanding.' },
  { name: 'Jason Brooks', role: 'Marketing Director', quote: 'The interactive dashboard makes it easy to spot high-value budget shifts instantly.' }
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-hero-gradient">
      <Navbar />
      <main className="mx-auto grid max-w-7xl gap-20 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Launch-ready AI analytics
              </span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Advertising Sales Prediction using Random Forest Regression
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Discover a premium dashboard experience for campaign forecasting, ROI insights, and budget optimization with modern animations and enterprise-grade analytics.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col gap-4 sm:flex-row">
              <Link href="/prediction" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-glow transition hover:opacity-95">
                Start Forecasting
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                View Dashboard
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_50px_120px_-70px_rgba(96,165,250,0.6)]">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-cyan-400/20 to-transparent" />
            <div className="relative space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Live model health</p>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-4xl font-semibold">94.8%</p>
                    <p className="text-sm text-slate-400">Forecast accuracy</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 px-4 py-2 text-sm font-semibold text-emerald-300">Excellent</div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Avg. ROI</p>
                  <p className="mt-3 text-3xl font-semibold text-white">4.7x</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-slate-300">
                  <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Response time</p>
                  <p className="mt-3 text-3xl font-semibold text-white">120ms</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Why choose AdPredict</p>
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <motion.article key={feature.title} whileHover={{ y: -6 }} className="glass rounded-3xl border border-white/10 p-6 shadow-xl">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Trusted by teams</p>
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <motion.div key={testimonial.name} whileHover={{ y: -4 }} className="glass rounded-3xl border border-white/10 p-6 shadow-xl">
                  <p className="text-lg leading-8 text-slate-200">“{testimonial.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

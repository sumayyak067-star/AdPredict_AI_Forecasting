'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Sparkles, UserCircle2 } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { PageTransition } from '@/components/page-transition';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 xl:grid-cols-[280px_1fr] xl:px-6">
        <Sidebar />
        <PageTransition>
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Developer Portfolio</p>
                  <h1 className="mt-3 text-3xl font-semibold text-white">Designed and developed by an ML-focused product engineer.</h1>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Sparkles className="h-4 w-4 text-cyan-300" /> Premium delivery
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.7fr_0.6fr]">
              <div className="glass rounded-4xl border border-white/10 p-8 shadow-xl">
                <div className="flex items-center gap-5">
                  <div className="rounded-3xl bg-cyan-500/10 p-4 text-cyan-300">
                    <UserCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Profile</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">A hands-on ML engineer and UI storyteller.</h2>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-slate-300">
                  <p>
                    Specializes in bridging advanced machine learning with polished user experiences. AdPredict showcases a strong focus on predictive accuracy, modern dashboard design, and production API reliability.
                  </p>
                  <p>
                    Built with Next.js App Router, Tailwind CSS, Framer Motion, and a curated analytics UI that feels premium and scalable.
                  </p>
                </div>
              </div>
              <div className="glass rounded-4xl border border-white/10 p-8 shadow-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Connect</p>
                <div className="mt-8 space-y-4">
                  <Link href="#" className="flex items-center gap-3 rounded-3xl bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10">
                    <Github className="h-5 w-5 text-slate-300" /> GitHub portfolio
                  </Link>
                  <Link href="#" className="flex items-center gap-3 rounded-3xl bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10">
                    <Linkedin className="h-5 w-5 text-slate-300" /> LinkedIn profile
                  </Link>
                  <Link href="mailto:hello@example.com" className="flex items-center gap-3 rounded-3xl bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:bg-white/10">
                    <Mail className="h-5 w-5 text-slate-300" /> hello@example.com
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </PageTransition>
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { PredictionForm } from '@/components/prediction-form';
import { PageTransition } from '@/components/page-transition';

interface PredictionResponse {
  prediction: number;
  confidence: number;
  insight: string;
}

export default function PredictionPage() {
  const [result, setResult] = useState<PredictionResponse | null>(null);

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
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Prediction Lab</p>
                  <h1 className="mt-3 text-3xl font-semibold text-white">Forecast ad sales instantly</h1>
                  <p className="mt-3 max-w-2xl text-slate-400">
                    Use your TV, Radio, and Newspaper budgets to generate a live sales forecast.
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  AI predictions
                </div>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[0.9fr_0.7fr]">
              <PredictionForm onPredictionSuccess={setResult} />

              <div className="glass rounded-4xl border border-white/10 p-8 shadow-xl">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Live results</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Real-time forecast</h2>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Estimated daily sales</p>
                    <p className="mt-4 text-6xl font-semibold text-white">
                      {result ? result.prediction : '--'}
                    </p>
                    <p className="mt-3 text-sm text-slate-400">
                      {result ? `Confidence: ${Math.round(result.confidence * 100)}%` : 'Submit budgets to see a forecast'}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">AI insight</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {result
                        ? result.insight
                        : 'Submit your advertising budgets to receive personalized insights from the model.'}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                    <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                      <span>Prediction confidence</span>
                      <span className="font-semibold text-cyan-300">
                        {result ? `${Math.round(result.confidence * 100)}%` : '0%'}
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
                        style={{
                          width: result ? `${Math.min(100, Math.round(result.confidence * 100))}%` : '0%'
                        }}
                      />
                    </div>
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

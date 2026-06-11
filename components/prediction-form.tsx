'use client';

import { FormEvent, useState } from 'react';
import { Zap } from 'lucide-react';

interface PredictionResult {
  prediction: number;
  confidence: number;
  insight: string;
}

interface PredictionFormProps {
  // eslint-disable-next-line no-unused-vars -- callback parameter name is for documentation only
  onPredictionSuccess?: (result: PredictionResult) => void;
}

const inputs = [
  { key: 'tv' as const, label: 'Television Budget', max: 300, step: 5, defaultValue: 150 },
  { key: 'radio' as const, label: 'Radio Budget', max: 100, step: 2, defaultValue: 30 },
  { key: 'newspaper' as const, label: 'Newspaper Budget', max: 150, step: 2, defaultValue: 20 }
];

export function PredictionForm({ onPredictionSuccess }: PredictionFormProps) {
  const [values, setValues] = useState({ tv: 150, radio: 30, newspaper: 20 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const totalBudget = values.tv + values.radio + values.newspaper;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Prediction failed');
      }

      onPredictionSuccess?.(data);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Failed to generate prediction');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass rounded-4xl border border-white/10 p-8 shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Smart Prediction</p>
          <h2 className="text-3xl font-semibold text-white">Forecast sales impact</h2>
          <p className="text-sm leading-7 text-slate-400">
            Adjust your advertising budgets and get instant sales predictions powered by a Random Forest model.
          </p>
        </div>

        <div className="space-y-6">
          {inputs.map((input) => (
            <div key={input.key} className="space-y-3">
              <div className="flex items-center justify-between gap-4">
                <label className="text-sm font-medium text-slate-100">{input.label}</label>
                <span className="text-sm font-semibold text-cyan-300">${values[input.key]}</span>
              </div>
              <input
                type="range"
                min={0}
                max={input.max}
                step={input.step}
                value={values[input.key]}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    [input.key]: Number(event.target.value)
                  }))
                }
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-400"
                disabled={loading}
              />
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Total budget</p>
          <p className="mt-2 text-3xl font-semibold text-white">${totalBudget}</p>
        </div>

        {error ? (
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-4 text-base font-semibold text-slate-950 shadow-glow transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Zap className="h-5 w-5" />
          {loading ? 'Generating prediction...' : 'Generate forecast'}
        </button>
      </form>
    </div>
  );
}

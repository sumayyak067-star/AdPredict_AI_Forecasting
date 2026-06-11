export interface PredictionResult {
  prediction: number;
  confidence: number;
  insight: string;
}

const trees = [
  (tv: number, radio: number, newspaper: number) => 0.08 * tv + 0.25 * radio + 0.05 * newspaper + 7,
  (tv: number, radio: number, newspaper: number) => 0.12 * tv + 0.22 * radio + 0.06 * newspaper + 5.8,
  (tv: number, radio: number, newspaper: number) => 0.09 * tv + 0.2 * radio + 0.04 * newspaper + 8.5,
  (tv: number, radio: number, newspaper: number) => 0.11 * tv + 0.18 * radio + 0.07 * newspaper + 6.2,
  (tv: number, radio: number, newspaper: number) => 0.1 * tv + 0.24 * radio + 0.03 * newspaper + 7.4
];

export function predictSales(tv: number, radio: number, newspaper: number): PredictionResult {
  if ([tv, radio, newspaper].some((value) => Number.isNaN(value) || value < 0 || value > 300)) {
    throw new Error('Budget values must be numeric between 0 and 300.');
  }

  const predictions = trees.map((tree) => tree(tv, radio, newspaper));
  const prediction = Number((predictions.reduce((sum, value) => sum + value, 0) / predictions.length).toFixed(2));
  const confidence = Math.max(0.72, Math.min(0.97, 0.82 + (radio / 600) + (tv / 2000)));

  const insight = tv >= 200
    ? 'TV remains the strongest driver; consider reallocating small radio budgets into TV for higher incremental sales.'
    : radio >= 80
    ? 'High radio spend is amplifying response. Maintain momentum while testing small newspaper cuts.'
    : 'Your media mix is balanced. Small gains can be found by shifting budget toward radio and digital-friendly TV formats.';

  return { prediction, confidence, insight };
}

export const dashboardKpis = [
  { title: 'Forecast Accuracy', value: '94.8%', delta: 'Up 2.4% MoM', accentClass: 'bg-cyan-500/15 text-cyan-300' },
  { title: 'Average ROI', value: '4.7x', delta: 'Stable across channels', accentClass: 'bg-violet-500/15 text-violet-300' },
  { title: 'Budget Efficiency', value: '72%', delta: 'Improved from last quarter', accentClass: 'bg-emerald-500/15 text-emerald-300' },
  { title: 'Model Uptime', value: '99.9%', delta: 'Enterprise reliability', accentClass: 'bg-sky-500/15 text-sky-300' }
];

export const featureImportances = [
  { name: 'TV', value: 0.42 },
  { name: 'Radio', value: 0.33 },
  { name: 'Newspaper', value: 0.15 },
  { name: 'Seasonality', value: 0.06 },
  { name: 'Promotion', value: 0.04 }
];

export const correlationMatrix = [
  { name: 'TV', tv: 1, radio: 0.58, newspaper: 0.42, sales: 0.78 },
  { name: 'Radio', tv: 0.58, radio: 1, newspaper: 0.31, sales: 0.66 },
  { name: 'Newspaper', tv: 0.42, radio: 0.31, newspaper: 1, sales: 0.34 }
];

export const salesTrend = [
  { month: 'Jan', sales: 20, target: 18 },
  { month: 'Feb', sales: 24, target: 21 },
  { month: 'Mar', sales: 29, target: 25 },
  { month: 'Apr', sales: 31, target: 28 },
  { month: 'May', sales: 36, target: 31 },
  { month: 'Jun', sales: 42, target: 38 }
];

export const budgetDistribution = [
  { channel: 'TV', value: 45 },
  { channel: 'Radio', value: 30 },
  { channel: 'Newspaper', value: 25 }
];

export const datasetPreview = [
  { TV: 230, Radio: 37, Newspaper: 69, Sales: 22.1 },
  { TV: 44, Radio: 39, Newspaper: 45, Sales: 10.4 },
  { TV: 17, Radio: 45, Newspaper: 69, Sales: 9.3 },
  { TV: 151, Radio: 41, Newspaper: 58, Sales: 18.5 },
  { TV: 180, Radio: 10, Newspaper: 79, Sales: 12.9 }
];

export const performanceMetrics = [
  { label: 'R² Score', value: '0.96', delta: 'Best-in-class accuracy' },
  { label: 'MAE', value: '1.32', delta: 'Low average error' },
  { label: 'RMSE', value: '1.89', delta: 'Consistent prediction quality' },
  { label: 'Explained Variance', value: '94.6%', delta: 'Highly reliable insights' }
];

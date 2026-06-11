'use client';

import { motion } from 'framer-motion';

interface DataTableProps {
  rows: { [key: string]: string | number }[];
}

export function DataTable({ rows }: DataTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass overflow-hidden rounded-4xl border border-white/10 shadow-xl"
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10 text-sm">
          <thead className="bg-slate-950/80 text-left text-xs uppercase tracking-[0.22em] text-slate-500">
            <tr>
              {Object.keys(rows[0] ?? {}).map((header) => (
                <th key={header} className="px-4 py-4 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-slate-900/80">
            {rows.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-slate-950/80' : ''}>
                {Object.values(row).map((value, cellIndex) => (
                  <td key={cellIndex} className="whitespace-nowrap px-4 py-4 text-slate-200">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

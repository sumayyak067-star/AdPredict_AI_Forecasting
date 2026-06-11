'use client';

import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

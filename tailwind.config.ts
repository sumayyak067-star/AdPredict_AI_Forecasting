import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 45px rgba(96, 165, 250, 0.18)'
      },
      colors: {
        surface: '#0b1120',
        soft: '#111827'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 22%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.12), transparent 20%), linear-gradient(135deg, #020617 0%, #111827 100%)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;

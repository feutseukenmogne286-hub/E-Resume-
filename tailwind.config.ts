import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        mist: '#F8FAFC',
        accent: '#0EA5E9',
      },
    },
  },
  plugins: [],
};

export default config;

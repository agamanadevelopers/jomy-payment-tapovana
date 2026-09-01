import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tapovana: {
          cream: '#FAF8F4',
          card: '#F0EDE6',
          border: '#E2DDD5',
          charcoal: '#1A1A1A',
          green: '#2A5311',
          'green-hover': '#3A6D18',
          'green-light': '#EAF1E3',
          'green-border': '#C8DEB5',
          muted: '#7A736B',
          secondary: '#5C5550',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#1DA851',
          dark: '#128C7E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '640px',
      },
    },
  },
  plugins: [],
};

export default config;

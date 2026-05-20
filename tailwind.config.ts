import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#F0F9FF',
          gold: '#0EA5E9',
          'gold-light': '#38BDF8',
          'gold-dark': '#0284C7',
          blue: '#06B6D4',
          'blue-light': '#67E8F9',
          ocean: '#0891B2',
          yellow: '#FBBF24',
          pink: '#F472B6',
          sky: '#E0F7FA',
          sand: '#FEF3C7',
          mint: '#A7F3D0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 50%, #0284C7 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        'gradient-dark': 'linear-gradient(180deg, #F0F9FF 0%, #E0F7FA 100%)',
        'gradient-summer': 'linear-gradient(135deg, #67E8F9 0%, #38BDF8 50%, #0284C7 100%)',
        'gradient-sky': 'linear-gradient(135deg, #E0F7FA 0%, #B3E5FC 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
        'gradient-beach': 'linear-gradient(135deg, #E0F7FA 0%, #FFFBEB 100%)',
        'gradient-wave': 'linear-gradient(180deg, #F0FDFF 0%, #E0F7FA 50%, #B3E5FC 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.7s ease-out',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

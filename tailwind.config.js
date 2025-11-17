/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          mint: '#A8E6CF',
          logo: '#55C6A8',
          bright: '#CBFFC9',
          dark: '#24392A',
          disabled: '#C1DFD1',
        },
        secondary: {
          coral: '#FF9999',
          coralLight: '#FFB3BA',
          coralSoft: '#FFC4C8',
        },
        lavender: {
          light: '#E8E3F3',
          medium: '#D4D0E8',
          dark: '#B8A5D9',
        },
        bg: {
          primary: '#F3F3F8',
          surface: '#FFFFFF',
          variant: '#F0F0F5',
        },
        textc: {
          primary: '#000000',
          secondary: '#2D2D2D',
          tertiary: '#666666',
          oncard: '#1A1A1A',
        },
        semantic: {
          successLight: '#F0FFF0',
          success: '#D4F4DD',
          successDark: '#A8E6CF',
          warning: '#FFB3BA',
          error: '#FF6B6B',
        },
        neutral: {
          muted: '#999999',
          disabled: '#CCCCCC',
          border: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        mona: ['Mona Sans', 'system-ui', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

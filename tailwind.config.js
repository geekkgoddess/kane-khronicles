export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kane-dark': '#0f0f1f',
        'kane-gold': '#d4af37',
        'kane-crimson': '#dc143c',
        'kane-silver': '#e8e8e8',
        'kane-deep': '#1a1a2e',
        'kane-accent': '#ff6b6b',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'kane-gradient': 'linear-gradient(135deg, #0f0f1f 0%, #1a1a2e 50%, #2d2d44 100%)',
        'kane-radial': 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'kane-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
        'kane-crimson-glow': '0 0 20px rgba(220, 20, 60, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

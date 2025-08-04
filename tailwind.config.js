export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Accent colors
        primary: '#8b5cf6',    // vivid violet
        secondary: '#22d3ee',  // cyan
        'text-light': '#e8ebf8', // soft off-white
        // For subtle surfaces
        'surface': 'rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        // Dark gradient base
        'dark-gradient': 'linear-gradient(135deg,#0f172a 0%,#1f2e50 70%)',
        // Alternative richer variant
        'electric-dusk': 'linear-gradient(135deg,#1e1e2f 0%,#3f2b5d 80%)',
      },
    },
  },
  plugins: [],
};

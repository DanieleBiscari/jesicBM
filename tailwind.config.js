/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bluTro:  "#13637E",
        grigioTro: "#313131",
        biancoTro: "#E6E4D9",
        gialloTro: "#F5A400",
        arancioneTro: "#F55400",
        bordeauxTro: "#591F00",
      },
    },
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          ubuntu: ['ubuntu', 'sans-serif']
        },
        colors: {
          'primary-blue': '#1D4ED8',
          'dark-blue': '#0F2C59',
          'custom-blue': 'rgb(0, 48, 91)',
        },
        animation: {
          'fade-in-up': 'fade-in-up 0.6s ease-out',
        },
        keyframes: {
          'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      // Add other plugins if needed
    ],
  }

  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
]
